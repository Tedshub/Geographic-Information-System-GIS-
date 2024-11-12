var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_digitasipetakabupatenkudusnew_0 = new ol.format.GeoJSON();
var features_digitasipetakabupatenkudusnew_0 = format_digitasipetakabupatenkudusnew_0.readFeatures(json_digitasipetakabupatenkudusnew_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digitasipetakabupatenkudusnew_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_digitasipetakabupatenkudusnew_0.addFeatures(features_digitasipetakabupatenkudusnew_0);var lyr_digitasipetakabupatenkudusnew_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_digitasipetakabupatenkudusnew_0, 
                style: style_digitasipetakabupatenkudusnew_0,
    title: 'digitasi peta kabupaten kudus new<br />\
    <img src="styles/legend/digitasipetakabupatenkudusnew_0_0.png" /> 2<br />\
    <img src="styles/legend/digitasipetakabupatenkudusnew_0_1.png" /> 3<br />\
    <img src="styles/legend/digitasipetakabupatenkudusnew_0_2.png" /> 5<br />\
    <img src="styles/legend/digitasipetakabupatenkudusnew_0_3.png" /> 13<br />\
    <img src="styles/legend/digitasipetakabupatenkudusnew_0_4.png" /> 14<br />\
    <img src="styles/legend/digitasipetakabupatenkudusnew_0_5.png" /> 15<br />\
    <img src="styles/legend/digitasipetakabupatenkudusnew_0_6.png" /> <br />'
        });

lyr_digitasipetakabupatenkudusnew_0.setVisible(true);
var layersList = [baseLayer,lyr_digitasipetakabupatenkudusnew_0];
lyr_digitasipetakabupatenkudusnew_0.set('fieldAliases', {'kecamatan': 'kecamatan', 'RumahSakit': 'RumahSakit', 'Puskesmas': 'Puskesmas', 'Ahli Gizi': 'Ahli Gizi', });
lyr_digitasipetakabupatenkudusnew_0.set('fieldImages', {'kecamatan': 'TextEdit', 'RumahSakit': 'TextEdit', 'Puskesmas': 'TextEdit', 'Ahli Gizi': 'TextEdit', });
lyr_digitasipetakabupatenkudusnew_0.set('fieldLabels', {'kecamatan': 'no label', 'RumahSakit': 'inline label', 'Puskesmas': 'inline label', 'Ahli Gizi': 'inline label', });
lyr_digitasipetakabupatenkudusnew_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});