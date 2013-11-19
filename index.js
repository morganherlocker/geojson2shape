var exec = require('child_process').exec,
    path = require('path')

module.exports = function(inPath, outPath, done){
  var ogrCommand = 'ogr2ogr -f "ESRI Shapefile" '+path.resolve(process.cwd()+'/'+outPath)+ ' '+
                    path.resolve(process.cwd()+'/'+inPath)+ ' '+
                    '-overwrite'

  exec(ogrCommand, function(err, stdout, stderr){
    done(err)
  })
}