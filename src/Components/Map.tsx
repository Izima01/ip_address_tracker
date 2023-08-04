
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import '../App.css';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react'

type Props = {
    setShowDisplay: React.Dispatch<React.SetStateAction<boolean>>,
    latLong: [number, number]
};

const AComponent = (props: {pos: [number, number]}) => {
    const map = useMap();

    useEffect(() => {
        if (props.pos) {
            map.setView(props.pos, map.getZoom());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.pos]);

    return null
}

const Map = (props: Props) => {

    return (
        <main className="w-full" style={{ flex: 1 }} id="map" onClick={() => props.setShowDisplay(false)}>
            <MapContainer center={props.latLong} zoom={13} scrollWheelZoom={false} className="h-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <AComponent pos={props.latLong} />
                <Marker position={props.latLong}>
                    <Popup>This is where you are</Popup>
                </Marker>
            </MapContainer>
        </main>
    )
}

export default Map