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
var format_AhliGizi20212022_0 = new ol.format.GeoJSON();
var features_AhliGizi20212022_0 = format_AhliGizi20212022_0.readFeatures(json_AhliGizi20212022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AhliGizi20212022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AhliGizi20212022_0.addFeatures(features_AhliGizi20212022_0);var lyr_AhliGizi20212022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AhliGizi20212022_0, 
                style: style_AhliGizi20212022_0,
    title: 'Ahli Gizi 2021-2022<br />\
    <img src="styles/legend/AhliGizi20212022_0_0.png" /> 2<br />\
    <img src="styles/legend/AhliGizi20212022_0_1.png" /> 3<br />\
    <img src="styles/legend/AhliGizi20212022_0_2.png" /> 5<br />\
    <img src="styles/legend/AhliGizi20212022_0_3.png" /> 13<br />\
    <img src="styles/legend/AhliGizi20212022_0_4.png" /> 14<br />\
    <img src="styles/legend/AhliGizi20212022_0_5.png" /> 15<br />\
    <img src="styles/legend/AhliGizi20212022_0_6.png" /> 18<br />\
    <img src="styles/legend/AhliGizi20212022_0_7.png" /> <br />'
        });

lyr_AhliGizi20212022_0.setVisible(true);
var layersList = [baseLayer,lyr_AhliGizi20212022_0];
lyr_AhliGizi20212022_0.set('fieldAliases', {'kecamatan': 'kecamatan', '2021': '2021', '2022': '2022', });
lyr_AhliGizi20212022_0.set('fieldImages', {'kecamatan': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr_AhliGizi20212022_0.set('fieldLabels', {'kecamatan': 'inline label', '2021': 'inline label', '2022': 'inline label', });
lyr_AhliGizi20212022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});