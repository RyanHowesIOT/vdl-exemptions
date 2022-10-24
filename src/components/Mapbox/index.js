import React, {useRef, useEffect, useState, useCallback} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Map, {
    Marker,
    Popup,
    Source,
    NavigationControl,
    FullscreenControl,
    ScaleControl
} from 'react-map-gl';

const mapboxAccessToken = "pk.eyJ1IjoibWFya3JvYmVydHNvbiIsImEiOiJjbDVtaGQzdWgwdHJxM2ptZ2cydzQ3cWNjIn0.dN0xerIj54xSxmZ4SvxKpA";

const Mapbox = () => {

    const mapRef = useRef();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    return (
        <div className="w-[100%] h-[100%]">
            <Map
                ref={mapRef}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={mapboxAccessToken}
                // onMouseMove={onHover}
                // onMouseEnter={handleEnter}
                ></Map>
        </div>
        )
    }
export default Mapbox;