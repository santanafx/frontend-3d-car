import { Marker } from 'react-map-gl'

import cars from '../../assets/images/cars.png'

type Props = {
  longitude: number
  latitude: number
  direction: number
}

export default function CarMarker({ longitude, latitude, direction }: Props) {
  const calculateRotationStyle = (angle: number) => {
    return {
      transform: `rotate(${angle}deg)`
    }
  }
  return (
    <Marker longitude={longitude} latitude={latitude}>
      <div className="car__marker" style={calculateRotationStyle(direction)}>
        <img className="car__marker__img" src={cars} alt="" />
      </div>
    </Marker>
  )
}
