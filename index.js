var exec = require('child_process').exec,
    path = require('path'),
    archiver = require('archiver'),
    fs = require('fs')

module.exports = function(inPath, outPath, zip, done){
  var ogrCommand = 'ogr2ogr -f "ESRI Shapefile" '+path.resolve(process.cwd()+'/'+outPath)+ ' '+
                    path.resolve(process.cwd()+'/'+inPath)+ ' '+
                    '-overwrite'

  exec(ogrCommand, function(err, stdout, stderr){
    if(zip){
      var output = fs.createWriteStream(path.resolve(process.cwd()+'/'+outPath).slice(0, -4) + '.zip')
      var archive = archiver('zip');
      archive.on('error', function(err) {
        done(err);
      });

      archive.pipe(output);
      var file1 = path.resolve(process.cwd()+'/'+outPath).slice(0, -4) + '.dbf'
      var file2 = path.resolve(process.cwd()+'/'+outPath).slice(0, -4) + '.prj'
      var file3 = path.resolve(process.cwd()+'/'+outPath).slice(0, -4) + '.shp'
      var file4 = path.resolve(process.cwd()+'/'+outPath).slice(0, -4) + '.shx'
      archive
        .append(fs.createReadStream(file1), { name: path.basename(file1) })
        .append(fs.createReadStream(file2), { name: path.basename(file2) })
        .append(fs.createReadStream(file3), { name: path.basename(file3) })
        .append(fs.createReadStream(file4), { name: path.basename(file4) });

      archive.finalize(function(err, bytes) {
        done(err)
      })
    }
    else{
      done(err)
    }
  })
}