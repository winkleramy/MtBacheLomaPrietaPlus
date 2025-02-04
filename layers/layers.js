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
var format_WaterSources_3 = new ol.format.GeoJSON();
var features_WaterSources_3 = format_WaterSources_3.readFeatures(json_WaterSources_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterSources_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterSources_3.addFeatures(features_WaterSources_3);
var lyr_WaterSources_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterSources_3, 
                style: style_WaterSources_3,
                popuplayertitle: 'WaterSources',
                interactive: true,
                title: '<img src="styles/legend/WaterSources_3.png" /> WaterSources'
            });
var format_FirewiseSignLocations_4 = new ol.format.GeoJSON();
var features_FirewiseSignLocations_4 = format_FirewiseSignLocations_4.readFeatures(json_FirewiseSignLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FirewiseSignLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FirewiseSignLocations_4.addFeatures(features_FirewiseSignLocations_4);
var lyr_FirewiseSignLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FirewiseSignLocations_4, 
                style: style_FirewiseSignLocations_4,
                popuplayertitle: 'FirewiseSignLocations',
                interactive: true,
                title: '<img src="styles/legend/FirewiseSignLocations_4.png" /> FirewiseSignLocations'
            });
var format_RefugeAreas_5 = new ol.format.GeoJSON();
var features_RefugeAreas_5 = format_RefugeAreas_5.readFeatures(json_RefugeAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RefugeAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RefugeAreas_5.addFeatures(features_RefugeAreas_5);
var lyr_RefugeAreas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RefugeAreas_5, 
                style: style_RefugeAreas_5,
                popuplayertitle: 'RefugeAreas',
                interactive: true,
                title: '<img src="styles/legend/RefugeAreas_5.png" /> RefugeAreas'
            });
var format_EmergencyVehicleTurnArounds_6 = new ol.format.GeoJSON();
var features_EmergencyVehicleTurnArounds_6 = format_EmergencyVehicleTurnArounds_6.readFeatures(json_EmergencyVehicleTurnArounds_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmergencyVehicleTurnArounds_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmergencyVehicleTurnArounds_6.addFeatures(features_EmergencyVehicleTurnArounds_6);
var lyr_EmergencyVehicleTurnArounds_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmergencyVehicleTurnArounds_6, 
                style: style_EmergencyVehicleTurnArounds_6,
                popuplayertitle: 'EmergencyVehicleTurnArounds',
                interactive: true,
                title: '<img src="styles/legend/EmergencyVehicleTurnArounds_6.png" /> EmergencyVehicleTurnArounds'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AssessorParcels_1.setVisible(true);lyr_CommunityBoundary_2.setVisible(true);lyr_WaterSources_3.setVisible(true);lyr_FirewiseSignLocations_4.setVisible(true);lyr_RefugeAreas_5.setVisible(true);lyr_EmergencyVehicleTurnArounds_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AssessorParcels_1,lyr_CommunityBoundary_2,lyr_WaterSources_3,lyr_FirewiseSignLocations_4,lyr_RefugeAreas_5,lyr_EmergencyVehicleTurnArounds_6];
lyr_AssessorParcels_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'APN': 'APN', 'APNNODASH': 'APNNODASH', 'SITEADD': 'SITEADD', 'SITEADD2': 'SITEADD2', 'USECDDESC': 'USECDDESC', 'ACRES': 'ACRES', 'SQUAREFT': 'SQUAREFT', 'ZONING': 'ZONING', 'RURALSVC': 'RURALSVC', 'URBANSVC': 'URBANSVC', 'ZOOFTOFCA': 'ZOOFTOFCA', 'ADJ_TO_TP': 'ADJ_TO_TP', 'GPLANDUSE': 'GPLANDUSE', 'GPBOUNDARY': 'GPBOUNDARY', 'AGRESOURCE': 'AGRESOURCE', 'SCENICRES': 'SCENICRES', 'GPSPCOM': 'GPSPCOM', 'COASTALZN': 'COASTALZN', 'COASTALAJ': 'COASTALAJ', 'COASTZNREX': 'COASTZNREX', 'ARCHEOSITE': 'ARCHEOSITE', 'PLNENVTEAM': 'PLNENVTEAM', 'FIREDIST': 'FIREDIST', 'FLOODCDIST': 'FLOODCDIST', 'RECDIST': 'RECDIST', 'SANITDIST': 'SANITDIST', 'SANDISTSOI': 'SANDISTSOI', 'WATERDIST': 'WATERDIST', 'WATERSER': 'WATERSER', 'GRASSLANDS': 'GRASSLANDS', 'BIOTIC': 'BIOTIC', 'RIPWOODLND': 'RIPWOODLND', 'SPCLFOREST': 'SPCLFOREST', 'SANDHILLS': 'SANDHILLS', 'SHUNITNAME': 'SHUNITNAME', 'SCLTSSTAT': 'SCLTSSTAT', 'SOILSEXPNS': 'SOILSEXPNS', 'FAULTZONE': 'FAULTZONE', 'FLDZONE': 'FLDZONE', 'FLOODWAYS': 'FLOODWAYS', 'STREAMTYP': 'STREAMTYP', 'LAKENAME': 'LAKENAME', 'SRESPAREA': 'SRESPAREA', 'GPSPCOMNME': 'GPSPCOMNME', 'SEPTICNITR': 'SEPTICNITR', 'CENSUSUA': 'CENSUSUA', 'COASTENCR': 'COASTENCR', 'ATKINSDFFS': 'ATKINSDFFS', 'CZUPDFHA': 'CZUPDFHA', 'SCCBIOTIC': 'SCCBIOTIC', 'COASTALBLF': 'COASTALBLF', 'GEORPTBUF': 'GEORPTBUF', 'CMRBUFFER': 'CMRBUFFER', 'WATBODBUFF': 'WATBODBUFF', 'GEOHAZSCRN': 'GEOHAZSCRN', 'CODECOMP': 'CODECOMP', 'COASTHAZRD': 'COASTHAZRD', 'SPCCONSUB': 'SPCCONSUB', 'SHALLOWGW': 'SHALLOWGW', 'COASTALPRI': 'COASTALPRI', 'RTCRAILBUF': 'RTCRAILBUF', });
lyr_CommunityBoundary_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_WaterSources_3.set('fieldAliases', {'id': 'id', 'type': 'type', 'gallons': 'gallons', 'material': 'material', });
lyr_FirewiseSignLocations_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_RefugeAreas_5.set('fieldAliases', {'id': 'id', 'describe': 'describe', 'Address': 'Address', });
lyr_EmergencyVehicleTurnArounds_6.set('fieldAliases', {'id': 'id', 'address': 'address', 'describe': 'describe', });
lyr_AssessorParcels_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'APN': 'TextEdit', 'APNNODASH': 'TextEdit', 'SITEADD': 'TextEdit', 'SITEADD2': 'TextEdit', 'USECDDESC': 'TextEdit', 'ACRES': 'TextEdit', 'SQUAREFT': 'TextEdit', 'ZONING': 'TextEdit', 'RURALSVC': 'TextEdit', 'URBANSVC': 'TextEdit', 'ZOOFTOFCA': 'TextEdit', 'ADJ_TO_TP': 'TextEdit', 'GPLANDUSE': 'TextEdit', 'GPBOUNDARY': 'TextEdit', 'AGRESOURCE': 'TextEdit', 'SCENICRES': 'TextEdit', 'GPSPCOM': 'TextEdit', 'COASTALZN': 'TextEdit', 'COASTALAJ': 'TextEdit', 'COASTZNREX': 'TextEdit', 'ARCHEOSITE': 'TextEdit', 'PLNENVTEAM': 'TextEdit', 'FIREDIST': 'TextEdit', 'FLOODCDIST': 'TextEdit', 'RECDIST': 'TextEdit', 'SANITDIST': 'TextEdit', 'SANDISTSOI': 'TextEdit', 'WATERDIST': 'TextEdit', 'WATERSER': 'TextEdit', 'GRASSLANDS': 'TextEdit', 'BIOTIC': 'TextEdit', 'RIPWOODLND': 'TextEdit', 'SPCLFOREST': 'TextEdit', 'SANDHILLS': 'TextEdit', 'SHUNITNAME': 'TextEdit', 'SCLTSSTAT': 'TextEdit', 'SOILSEXPNS': 'TextEdit', 'FAULTZONE': 'TextEdit', 'FLDZONE': 'TextEdit', 'FLOODWAYS': 'TextEdit', 'STREAMTYP': 'TextEdit', 'LAKENAME': 'TextEdit', 'SRESPAREA': 'TextEdit', 'GPSPCOMNME': 'TextEdit', 'SEPTICNITR': 'TextEdit', 'CENSUSUA': 'TextEdit', 'COASTENCR': 'TextEdit', 'ATKINSDFFS': 'TextEdit', 'CZUPDFHA': 'TextEdit', 'SCCBIOTIC': 'TextEdit', 'COASTALBLF': 'TextEdit', 'GEORPTBUF': 'TextEdit', 'CMRBUFFER': 'TextEdit', 'WATBODBUFF': 'TextEdit', 'GEOHAZSCRN': 'TextEdit', 'CODECOMP': 'TextEdit', 'COASTHAZRD': 'TextEdit', 'SPCCONSUB': 'TextEdit', 'SHALLOWGW': 'TextEdit', 'COASTALPRI': 'TextEdit', 'RTCRAILBUF': 'TextEdit', });
lyr_CommunityBoundary_2.set('fieldImages', {'id': 'Hidden', 'name': 'Hidden', });
lyr_WaterSources_3.set('fieldImages', {'id': 'Hidden', 'type': 'TextEdit', 'gallons': 'TextEdit', 'material': 'TextEdit', });
lyr_FirewiseSignLocations_4.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', });
lyr_RefugeAreas_5.set('fieldImages', {'id': 'Hidden', 'describe': 'TextEdit', 'Address': 'TextEdit', });
lyr_EmergencyVehicleTurnArounds_6.set('fieldImages', {'id': 'Hidden', 'address': 'TextEdit', 'describe': 'TextEdit', });
lyr_AssessorParcels_1.set('fieldLabels', {'OBJECTID': 'no label', 'APN': 'no label', 'APNNODASH': 'no label', 'SITEADD': 'no label', 'SITEADD2': 'no label', 'USECDDESC': 'no label', 'ACRES': 'no label', 'SQUAREFT': 'no label', 'ZONING': 'no label', 'RURALSVC': 'no label', 'URBANSVC': 'no label', 'ZOOFTOFCA': 'no label', 'ADJ_TO_TP': 'no label', 'GPLANDUSE': 'no label', 'GPBOUNDARY': 'no label', 'AGRESOURCE': 'no label', 'SCENICRES': 'no label', 'GPSPCOM': 'no label', 'COASTALZN': 'no label', 'COASTALAJ': 'no label', 'COASTZNREX': 'no label', 'ARCHEOSITE': 'no label', 'PLNENVTEAM': 'no label', 'FIREDIST': 'no label', 'FLOODCDIST': 'no label', 'RECDIST': 'no label', 'SANITDIST': 'no label', 'SANDISTSOI': 'no label', 'WATERDIST': 'no label', 'WATERSER': 'no label', 'GRASSLANDS': 'no label', 'BIOTIC': 'no label', 'RIPWOODLND': 'no label', 'SPCLFOREST': 'no label', 'SANDHILLS': 'no label', 'SHUNITNAME': 'no label', 'SCLTSSTAT': 'no label', 'SOILSEXPNS': 'no label', 'FAULTZONE': 'no label', 'FLDZONE': 'no label', 'FLOODWAYS': 'no label', 'STREAMTYP': 'no label', 'LAKENAME': 'no label', 'SRESPAREA': 'no label', 'GPSPCOMNME': 'no label', 'SEPTICNITR': 'no label', 'CENSUSUA': 'no label', 'COASTENCR': 'no label', 'ATKINSDFFS': 'no label', 'CZUPDFHA': 'no label', 'SCCBIOTIC': 'no label', 'COASTALBLF': 'no label', 'GEORPTBUF': 'no label', 'CMRBUFFER': 'no label', 'WATBODBUFF': 'no label', 'GEOHAZSCRN': 'no label', 'CODECOMP': 'no label', 'COASTHAZRD': 'no label', 'SPCCONSUB': 'no label', 'SHALLOWGW': 'no label', 'COASTALPRI': 'no label', 'RTCRAILBUF': 'no label', });
lyr_CommunityBoundary_2.set('fieldLabels', {});
lyr_WaterSources_3.set('fieldLabels', {'type': 'inline label - visible with data', 'gallons': 'inline label - visible with data', 'material': 'inline label - visible with data', });
lyr_FirewiseSignLocations_4.set('fieldLabels', {'name': 'no label', });
lyr_RefugeAreas_5.set('fieldLabels', {'describe': 'inline label - visible with data', 'Address': 'inline label - visible with data', });
lyr_EmergencyVehicleTurnArounds_6.set('fieldLabels', {'address': 'inline label - visible with data', 'describe': 'inline label - visible with data', });
lyr_EmergencyVehicleTurnArounds_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});