geojson2shape
===========

a node.js module for converting a geojson file to a shapefile

```bash
npm install geojson2shape
```

This module is a simple wrapper around ogr2ogr that takes a geojson file and outputs a shapefile. ogr2ogr must be installed to use this module. 

```javascript
var geojson2shape = require('geojson2shape')
// a shapefile is actually multiple files. geojson2shape will output a zipped version if specified.
var zip = true
geojson2shape(__dirname+'/polygons.geojson', __dirname+'/polygons.shp', function(err){
  if(err) throw err
})
```
