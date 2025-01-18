var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CommunityBoundary_1 = new ol.format.GeoJSON();
var features_CommunityBoundary_1 = format_CommunityBoundary_1.readFeatures(json_CommunityBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityBoundary_1.addFeatures(features_CommunityBoundary_1);
var lyr_CommunityBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityBoundary_1, 
                style: style_CommunityBoundary_1,
                popuplayertitle: 'CommunityBoundary',
                interactive: true,
                title: '<img src="styles/legend/CommunityBoundary_1.png" /> CommunityBoundary'
            });
var format_WaterSources_2 = new ol.format.GeoJSON();
var features_WaterSources_2 = format_WaterSources_2.readFeatures(json_WaterSources_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterSources_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterSources_2.addFeatures(features_WaterSources_2);
var lyr_WaterSources_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterSources_2, 
                style: style_WaterSources_2,
                popuplayertitle: 'WaterSources',
                interactive: true,
                title: '<img src="styles/legend/WaterSources_2.png" /> WaterSources'
            });
var format_FirewiseSignLocations_3 = new ol.format.GeoJSON();
var features_FirewiseSignLocations_3 = format_FirewiseSignLocations_3.readFeatures(json_FirewiseSignLocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FirewiseSignLocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FirewiseSignLocations_3.addFeatures(features_FirewiseSignLocations_3);
var lyr_FirewiseSignLocations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FirewiseSignLocations_3, 
                style: style_FirewiseSignLocations_3,
                popuplayertitle: 'FirewiseSignLocations',
                interactive: true,
                title: '<img src="styles/legend/FirewiseSignLocations_3.png" /> FirewiseSignLocations'
            });
var format_RefugeAreas_4 = new ol.format.GeoJSON();
var features_RefugeAreas_4 = format_RefugeAreas_4.readFeatures(json_RefugeAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RefugeAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RefugeAreas_4.addFeatures(features_RefugeAreas_4);
var lyr_RefugeAreas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RefugeAreas_4, 
                style: style_RefugeAreas_4,
                popuplayertitle: 'RefugeAreas',
                interactive: true,
                title: '<img src="styles/legend/RefugeAreas_4.png" /> RefugeAreas'
            });
var format_EmergencyVehicleTurnArounds_5 = new ol.format.GeoJSON();
var features_EmergencyVehicleTurnArounds_5 = format_EmergencyVehicleTurnArounds_5.readFeatures(json_EmergencyVehicleTurnArounds_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmergencyVehicleTurnArounds_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmergencyVehicleTurnArounds_5.addFeatures(features_EmergencyVehicleTurnArounds_5);
var lyr_EmergencyVehicleTurnArounds_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmergencyVehicleTurnArounds_5, 
                style: style_EmergencyVehicleTurnArounds_5,
                popuplayertitle: 'EmergencyVehicleTurnArounds',
                interactive: true,
                title: '<img src="styles/legend/EmergencyVehicleTurnArounds_5.png" /> EmergencyVehicleTurnArounds'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CommunityBoundary_1.setVisible(true);lyr_WaterSources_2.setVisible(true);lyr_FirewiseSignLocations_3.setVisible(true);lyr_RefugeAreas_4.setVisible(true);lyr_EmergencyVehicleTurnArounds_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CommunityBoundary_1,lyr_WaterSources_2,lyr_FirewiseSignLocations_3,lyr_RefugeAreas_4,lyr_EmergencyVehicleTurnArounds_5];
lyr_CommunityBoundary_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_WaterSources_2.set('fieldAliases', {'id': 'id', 'type': 'type', 'gallons': 'gallons', 'material': 'material', });
lyr_FirewiseSignLocations_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_RefugeAreas_4.set('fieldAliases', {'id': 'id', 'describe': 'describe', 'Address': 'Address', });
lyr_EmergencyVehicleTurnArounds_5.set('fieldAliases', {'id': 'id', 'address': 'address', 'describe': 'describe', });
lyr_CommunityBoundary_1.set('fieldImages', {'id': 'Hidden', 'name': 'Hidden', });
lyr_WaterSources_2.set('fieldImages', {'id': 'Hidden', 'type': 'TextEdit', 'gallons': 'TextEdit', 'material': 'TextEdit', });
lyr_FirewiseSignLocations_3.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', });
lyr_RefugeAreas_4.set('fieldImages', {'id': 'Hidden', 'describe': 'TextEdit', 'Address': 'TextEdit', });
lyr_EmergencyVehicleTurnArounds_5.set('fieldImages', {'id': 'Hidden', 'address': 'TextEdit', 'describe': 'TextEdit', });
lyr_CommunityBoundary_1.set('fieldLabels', {});
lyr_WaterSources_2.set('fieldLabels', {'type': 'no label', 'gallons': 'no label', 'material': 'no label', });
lyr_FirewiseSignLocations_3.set('fieldLabels', {'name': 'no label', });
lyr_RefugeAreas_4.set('fieldLabels', {'describe': 'no label', 'Address': 'no label', });
lyr_EmergencyVehicleTurnArounds_5.set('fieldLabels', {'address': 'no label', 'describe': 'no label', });
lyr_EmergencyVehicleTurnArounds_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});