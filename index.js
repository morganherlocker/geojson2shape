module.exports = function(inPath, outPath, done){
  exec('ogr2ogr -f "ESRI Shapefile" '+__dirname+'/'+outPath+ ' '+
        __dirname+'/'+inPath, function(err, stdout, stderr){
    done(err)
  })
}