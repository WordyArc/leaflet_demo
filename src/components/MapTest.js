import React from 'react';
import {MapContainer, TileLayer, ImageOverlay, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import {render} from "@testing-library/react"; // Подключение стилей Leaflet

class MapWithImage extends React.Component {
    static position = [51.505, -0.09]

    render() {

        return (
            <div>
                <MapContainer center={this.position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={this.position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>,
            </div>
        );
    }

}

export default MapWithImage

