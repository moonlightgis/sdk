import React from 'react';
global.React = React;

import ol from 'openlayers';
global.ol = ol;

import {IntlProvider} from 'react-intl';
global.IntlProvider = IntlProvider;

import UI from 'pui-react-tabs';
global.UI = UI;

import DD from 'pui-react-dropdowns';
global.DD = DD;

import AddLayer from './components/AddLayer.jsx';
global.AddLayer = AddLayer;

import Bookmarks from './components/Bookmarks.jsx';
global.Bookmarks = Bookmarks;

import Chart from './components/Chart.jsx';
global.Chart = Chart;

import Edit from './components/Edit.jsx';
global.Edit = Edit;

import FeatureTable from './components/FeatureTable.jsx';
global.FeatureTable = FeatureTable;

import Geocoding from './components/Geocoding.jsx';
global.Geocoding = Geocoding;

import GeocodingResults from './components/GeocodingResults.jsx';
global.GeocodingResults = GeocodingResults;

import Geolocation from './components/Geolocation.jsx';
global.Geolocation = Geolocation;

import Globe from './components/Globe.jsx';
global.Globe = Globe;

import HomeButton from './components/HomeButton.jsx';
global.HomeButton = HomeButton;

import ImageExport from './components/ImageExport.jsx';
global.ImageExport = ImageExport;

import InfoPopup from './components/InfoPopup.jsx';
global.InfoPopup = InfoPopup;

import LayerList from './components/LayerList.jsx';
global.LayerList = LayerList;

import Measure from './components/Measure.jsx';
global.Measure = Measure;

import Playback from './components/Playback.jsx';
global.Playback = Playback;

import QGISLegend from './components/QGISLegend.jsx';
global.QGISLegend = QGISLegend;

import QGISPrint from './components/QGISPrint.jsx';
global.QGISPrint = QGISPrint;

import QueryBuilder from './components/QueryBuilder.jsx';
global.QueryBuilder = QueryBuilder;

import Select from './components/Select.jsx';
global.Select = Select;
