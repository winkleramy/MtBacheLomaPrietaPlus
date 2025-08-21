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
var format_AssessorParcels_1 = new ol.format.GeoJSON();
var features_AssessorParcels_1 = format_AssessorParcels_1.readFeatures(json_AssessorParcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssessorParcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssessorParcels_1.addFeatures(features_AssessorParcels_1);
var lyr_AssessorParcels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssessorParcels_1, 
                style: style_AssessorParcels_1,
                popuplayertitle: 'AssessorParcels',
                interactive: true,
                title: '<img src="styles/legend/AssessorParcels_1.png" /> AssessorParcels'
            });
var format_CommunityBoundary_2 = new ol.format.GeoJSON();
var features_CommunityBoundary_2 = format_CommunityBoundary_2.readFeatures(json_CommunityBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityBoundary_2.addFeatures(features_CommunityBoundary_2);
var lyr_CommunityBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityBoundary_2, 
                style: style_CommunityBoundary_2,
                popuplayertitle: 'CommunityBoundary',
                interactive: true,
                title: '<img src="styles/legend/CommunityBoundary_2.png" /> CommunityBoundary'
            });
var format_RefugeAreas_3 = new ol.format.GeoJSON();
var features_RefugeAreas_3 = format_RefugeAreas_3.readFeatures(json_RefugeAreas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RefugeAreas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RefugeAreas_3.addFeatures(features_RefugeAreas_3);
var lyr_RefugeAreas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RefugeAreas_3, 
                style: style_RefugeAreas_3,
                popuplayertitle: 'RefugeAreas',
                interactive: true,
                title: '<img src="styles/legend/RefugeAreas_3.png" /> RefugeAreas'
            });
var format_EmergencyVehicleTurnArounds_4 = new ol.format.GeoJSON();
var features_EmergencyVehicleTurnArounds_4 = format_EmergencyVehicleTurnArounds_4.readFeatures(json_EmergencyVehicleTurnArounds_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmergencyVehicleTurnArounds_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmergencyVehicleTurnArounds_4.addFeatures(features_EmergencyVehicleTurnArounds_4);
var lyr_EmergencyVehicleTurnArounds_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmergencyVehicleTurnArounds_4, 
                style: style_EmergencyVehicleTurnArounds_4,
                popuplayertitle: 'EmergencyVehicleTurnArounds',
                interactive: true,
                title: '<img src="styles/legend/EmergencyVehicleTurnArounds_4.png" /> EmergencyVehicleTurnArounds'
            });
var format_EmergencyWaterSources_5 = new ol.format.GeoJSON();
var features_EmergencyWaterSources_5 = format_EmergencyWaterSources_5.readFeatures(json_EmergencyWaterSources_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmergencyWaterSources_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmergencyWaterSources_5.addFeatures(features_EmergencyWaterSources_5);
var lyr_EmergencyWaterSources_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmergencyWaterSources_5, 
                style: style_EmergencyWaterSources_5,
                popuplayertitle: 'EmergencyWaterSources',
                interactive: true,
                title: '<img src="styles/legend/EmergencyWaterSources_5.png" /> EmergencyWaterSources'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AssessorParcels_1.setVisible(true);lyr_CommunityBoundary_2.setVisible(true);lyr_RefugeAreas_3.setVisible(true);lyr_EmergencyVehicleTurnArounds_4.setVisible(true);lyr_EmergencyWaterSources_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AssessorParcels_1,lyr_CommunityBoundary_2,lyr_RefugeAreas_3,lyr_EmergencyVehicleTurnArounds_4,lyr_EmergencyWaterSources_5];
lyr_AssessorParcels_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'APN': 'APN', 'APNNODASH': 'APNNODASH', 'SITEADD': 'SITEADD', 'SITEADD2': 'SITEADD2', 'ACRES': 'ACRES', 'SITEADDNO': 'SITEADDNO', });
lyr_CommunityBoundary_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_RefugeAreas_3.set('fieldAliases', {'id': 'id', 'describe': 'describe', 'Address': 'Address', });
lyr_EmergencyVehicleTurnArounds_4.set('fieldAliases', {'id': 'id', 'address': 'address', 'describe': 'describe', 'Notes': 'Notes', });
lyr_EmergencyWaterSources_5.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Gallons': 'Gallons', 'Material': 'Material', 'Source': 'Source', 'Address': 'Address', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Notes': 'Notes', 'MakePublic': 'MakePublic', });
lyr_AssessorParcels_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'APN': 'TextEdit', 'APNNODASH': 'TextEdit', 'SITEADD': 'TextEdit', 'SITEADD2': 'TextEdit', 'ACRES': 'TextEdit', 'SITEADDNO': 'Range', });
lyr_CommunityBoundary_2.set('fieldImages', {'id': 'Hidden', 'name': 'Hidden', });
lyr_RefugeAreas_3.set('fieldImages', {'id': 'Hidden', 'describe': 'TextEdit', 'Address': 'TextEdit', });
lyr_EmergencyVehicleTurnArounds_4.set('fieldImages', {'id': 'Hidden', 'address': 'TextEdit', 'describe': 'TextEdit', 'Notes': '', });
lyr_EmergencyWaterSources_5.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Gallons': 'Range', 'Material': 'TextEdit', 'Source': 'TextEdit', 'Address': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Notes': 'TextEdit', 'MakePublic': 'Range', });
lyr_AssessorParcels_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'APN': 'inline label - visible with data', 'APNNODASH': 'inline label - visible with data', 'SITEADD': 'inline label - visible with data', 'SITEADD2': 'inline label - visible with data', 'ACRES': 'inline label - visible with data', 'SITEADDNO': 'no label', });
lyr_CommunityBoundary_2.set('fieldLabels', {});
lyr_RefugeAreas_3.set('fieldLabels', {'describe': 'inline label - visible with data', 'Address': 'inline label - visible with data', });
lyr_EmergencyVehicleTurnArounds_4.set('fieldLabels', {'address': 'inline label - visible with data', 'describe': 'inline label - visible with data', 'Notes': 'no label', });
lyr_EmergencyWaterSources_5.set('fieldLabels', {'id': 'no label', 'Type': 'inline label - visible with data', 'Gallons': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Source': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Notes': 'hidden field', 'MakePublic': 'hidden field', });
lyr_EmergencyWaterSources_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});