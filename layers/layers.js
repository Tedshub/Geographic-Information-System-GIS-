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
var format_kecamatan_0 = new ol.format.GeoJSON();
var features_kecamatan_0 = format_kecamatan_0.readFeatures(json_kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_0.addFeatures(features_kecamatan_0);var lyr_kecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_0, 
                style: style_kecamatan_0,
    title: 'kecamatan<br />\
    <img src="styles/legend/kecamatan_0_0.png" /> Bae<br />\
    <img src="styles/legend/kecamatan_0_1.png" /> Dawe<br />\
    <img src="styles/legend/kecamatan_0_2.png" /> Gebog<br />\
    <img src="styles/legend/kecamatan_0_3.png" /> Jati<br />\
    <img src="styles/legend/kecamatan_0_4.png" /> Jekulo<br />\
    <img src="styles/legend/kecamatan_0_5.png" /> Kaliwungu<br />\
    <img src="styles/legend/kecamatan_0_6.png" /> Kota Kudus<br />\
    <img src="styles/legend/kecamatan_0_7.png" /> Mejobo<br />\
    <img src="styles/legend/kecamatan_0_8.png" /> Undaan<br />\
    <img src="styles/legend/kecamatan_0_9.png" /> <br />'
        });

lyr_kecamatan_0.setVisible(true);
var layersList = [baseLayer,lyr_kecamatan_0];
lyr_kecamatan_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Rumah Saki': 'Rumah Saki', 'Puskesmas': 'Puskesmas', 'Ahli Gizi': 'Ahli Gizi', });
lyr_kecamatan_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Rumah Saki': 'TextEdit', 'Puskesmas': 'TextEdit', 'Ahli Gizi': 'TextEdit', });
lyr_kecamatan_0.set('fieldLabels', {'Kecamatan': 'no label', 'Rumah Saki': 'inline label', 'Puskesmas': 'inline label', 'Ahli Gizi': 'inline label', });
lyr_kecamatan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});