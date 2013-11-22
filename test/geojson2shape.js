var geojson2shape = require('../index.js'),
    should = require('should')

describe('geojson2shape', function(){
  it('should take a geojson file and output a shapefile', function(done){
    geojson2shape(__dirname+'/in.geojson', __dirname+'/out.shp', false, function(err){
      if(err) throw err
      done()
    })
  })
  it('should take a geojson file and output a shapefile zipped', function(done){
    geojson2shape(__dirname+'/in.geojson', __dirname+'/out.shp', true, function(err){
      if(err) throw err
      done()
    })
  })
})