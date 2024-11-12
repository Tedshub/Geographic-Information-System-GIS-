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
var format_Puskesmas20212022_0 = new ol.format.GeoJSON();
var features_Puskesmas20212022_0 = format_Puskesmas20212022_0.readFeatures(json_Puskesmas20212022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas20212022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Puskesmas20212022_0.addFeatures(features_Puskesmas20212022_0);var lyr_Puskesmas20212022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puskesmas20212022_0, 
                style: style_Puskesmas20212022_0,
    title: 'Puskesmas 2021-2022<br />\
    <img src="styles/legend/Puskesmas20212022_0_0.png" /> 2<br />\
    <img src="styles/legend/Puskesmas20212022_0_1.png" /> 3<br />\
    <img src="styles/legend/Puskesmas20212022_0_2.png" /> <br />'
        });

lyr_Puskesmas20212022_0.setVisible(true);
var layersList = [baseLayer,lyr_Puskesmas20212022_0];
lyr_Puskesmas20212022_0.set('fieldAliases', {'kecamatan': 'kecamatan', '2021': '2021', '2022': '2022', });
lyr_Puskesmas20212022_0.set('fieldImages', {'kecamatan': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr_Puskesmas20212022_0.set('fieldLabels', {'kecamatan': 'inline label', '2021': 'inline label', '2022': 'inline label', });
lyr_Puskesmas20212022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});