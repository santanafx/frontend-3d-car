import { useEffect } from 'react'

import { Marker } from 'react-map-gl'

import cars from '../../assets/images/cars.png'

type ViewState = {
  longitude: number
  latitude: number
  zoom: number
}

type Props = {
  longitude: number
  latitude: number
  direction: number
  setViewStateProp: (viewState: ViewState) => void
}

export default function CarMarker({
  longitude,
  latitude,
  direction,
  setViewStateProp
}: Props) {
  useEffect(() => {
    setViewStateProp({
      longitude: longitude,
      latitude: latitude,
      zoom: 14
    })
  }, [longitude, latitude])

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
