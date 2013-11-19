geojson2kml
===========

a node.js module for converting a geojson file to a shape file

```bash
npm install geojson2shape
```

This module is a simple wrapper around ogr2ogr that takes a geojson file and outputs a shape file. ogr2ogr must be installed to use this module. 

```javascript
var geojson2shape = require('geojson2shape')
// A shape file is actually several files. If specified, geojson2shape will zip these files for you.
var zip = true

geojson2shape('./polygons.geojson', './polygons.shp', zip, function(err){
  if(err) throw err
})
```
