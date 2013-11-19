geojson2kml
===========

a node.js module for converting a geojson file to a shape file

```bash
npm install geojson2shape
```

This module is a simple wrapper around ogr2ogr that takes a geojson file and outputs a shape file. ogr2ogr must be installed to use this module. 

```javascript
var geojson2shape = require('geojson2shape')

geojson2shape('./polygons.geojson', './polygons.shp', function(err){
  if(err) throw err
})
```
