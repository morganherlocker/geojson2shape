var exec = require('child_process').exec,
    path = require('path'),
    archiver = require('archiver'),
    fs = require('fs'),
    async = require('async')

module.exports = function(inPath, outPath, zip, done){
  var ogrCommand = 'ogr2ogr -f "ESRI Shapefile" '+outPath+ ' '+inPath+ ' '+
                    '-overwrite'

  exec(ogrCommand, function(err, stdout, stderr){
    if(zip){
      var output = fs.createWriteStream(outPath.slice(0, -4) + '.zip')
      var archive = archiver('zip');
      archive.on('error', function(err) {
        done(err);
      });

      archive.pipe(output);
      var file1 = outPath.slice(0, -4) + '.dbf'
      var file2 = outPath.slice(0, -4) + '.prj'
      var file3 = outPath.slice(0, -4) + '.shp'
      var file4 = outPath.slice(0, -4) + '.shx'
      archive
        .append(fs.createReadStream(file1), { name: path.basename(file1) })
        .append(fs.createReadStream(file2), { name: path.basename(file2) })
        .append(fs.createReadStream(file3), { name: path.basename(file3) })
        .append(fs.createReadStream(file4), { name: path.basename(file4) });

      archive.finalize(function(err, bytes) {
        async.parallel([
          function(callback){
            fs.unlink(file1, function(){callback()})
          },
          function(callback){
            fs.unlink(file2, function(){callback()})
          },
          function(callback){
            fs.unlink(file3, function(){callback()})
          },
          function(callback){
            fs.unlink(file4, function(){callback()})
          }
        ],
        function(err){
          done(err)
        })
      })
    }
    else{
      done(err)
    }
  })
}