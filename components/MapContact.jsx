import ReactMapboxGl, {Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const accessToken = "pk.eyJ1IjoiZWxpbWFuIiwiYSI6ImNsMncxZGw4ZDBoMGkzcG80MTNlNjJ3MDAifQ.obX5NEdVGpISngwGaLOXBg"
const Map = ReactMapboxGl({accessToken})
const zoom = [17.00]

const MapContact = ({style}) => {
    return (
        <div className={style}>
            <Map
            style="mapbox://styles/mapbox/streets-v8"
            zoom={zoom}
            center={[-8.55920, 42.87352]}
            containerStyle={{
            height: "100%",
            width: "100%"
            }}
            >
                <Marker coordinates={[-8.55920, 42.87347]}>
                    <img src="/assets/icons8-marcador-48.png"/>
                </Marker>
            </Map>
        </div>
    )
}

export default MapContact