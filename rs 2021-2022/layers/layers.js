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
var format_RumahSakit20212022_0 = new ol.format.GeoJSON();
var features_RumahSakit20212022_0 = format_RumahSakit20212022_0.readFeatures(json_RumahSakit20212022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit20212022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakit20212022_0.addFeatures(features_RumahSakit20212022_0);var lyr_RumahSakit20212022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit20212022_0, 
                style: style_RumahSakit20212022_0,
    title: 'Rumah Sakit 2021-2022<br />\
    <img src="styles/legend/RumahSakit20212022_0_0.png" /> 0<br />\
    <img src="styles/legend/RumahSakit20212022_0_1.png" /> 1<br />\
    <img src="styles/legend/RumahSakit20212022_0_2.png" /> 2<br />\
    <img src="styles/legend/RumahSakit20212022_0_3.png" /> <br />'
        });var format_pointRS_1 = new ol.format.GeoJSON();
var features_pointRS_1 = format_pointRS_1.readFeatures(json_pointRS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointRS_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pointRS_1.addFeatures(features_pointRS_1);var lyr_pointRS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointRS_1, 
                style: style_pointRS_1,
                title: '<img src="styles/legend/pointRS_1.png" /> pointRS'
            });

lyr_RumahSakit20212022_0.setVisible(true);lyr_pointRS_1.setVisible(true);
var layersList = [baseLayer,lyr_RumahSakit20212022_0,lyr_pointRS_1];
lyr_RumahSakit20212022_0.set('fieldAliases', {'kecamatan': 'kecamatan', '2021': '2021', '2022': '2022', });
lyr_pointRS_1.set('fieldAliases', {'RumahSakit': 'RumahSakit', });
lyr_RumahSakit20212022_0.set('fieldImages', {'kecamatan': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr_pointRS_1.set('fieldImages', {'RumahSakit': 'TextEdit', });
lyr_RumahSakit20212022_0.set('fieldLabels', {'kecamatan': 'inline label', '2021': 'inline label', '2022': 'inline label', });
lyr_pointRS_1.set('fieldLabels', {'RumahSakit': 'inline label', });
lyr_pointRS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});