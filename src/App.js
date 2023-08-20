import logo from './logo.svg';
import './App.css';
import MapWithImage from "./components/MapTest";
import {LayersControl, MapContainer, TileLayer, ZoomControl} from "react-leaflet";

function App() {
  return (
    <div className="App">
        <>
            <MapContainer
                center={[37.0902, -95.7129]}
                zoom={3}
                zoomControl={false}
                style={{ height: '100vh', width: '100%' }}
            >
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Basic Map">
                        <TileLayer
                            attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Topo Map">
                        <TileLayer
                            attribution='Map data: &amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &amp;copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Toner">
                        <TileLayer
                            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="satellite google">
                        <TileLayer
                            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                            subdomains={['mt1','mt2','mt3']}
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="satellite msi">
                        <TileLayer
                            url="http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png"
                            subdomains={['mt1','mt2','mt3']}

                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="ArcMap">
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1M2QxNTljZC1jMTRlLTRlZGQtYjBmNy04Y2FkMjJhZmU1OTUiLCJpZCI6MTQ5NjAyLCJpYXQiOjE2ODc4NTM1OTl9.mvq2YU1ylkrk6Md0EzJIOCd6TOZBr6soevnVyZggluc'
                            id='mapbox.streets'

                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                <ZoomControl position='topright'/>
                <TileLayer
                    attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    </div>
  );
}

export default App;
