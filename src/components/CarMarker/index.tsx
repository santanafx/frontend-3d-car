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
  speed: number
  follow: boolean
  setViewStateProp: (viewState: ViewState) => void
}

export default function CarMarker({
  longitude,
  latitude,
  direction,
  speed,
  follow,
  setViewStateProp
}: Props) {
  useEffect(() => {
    if (follow === true) {
      setViewStateProp({
        longitude: longitude,
        latitude: latitude,
        zoom: 16
      })
    }
  }, [longitude, latitude])

  const calculateRotationStyle = (angle: number) => {
    return {
      transform: `rotate(${angle}deg)`
    }
  }

  return (
    <>
      <Marker longitude={longitude} latitude={latitude}>
        <div className="carMarker" style={calculateRotationStyle(direction)}>
          <img className="carMarker__img" src={cars} alt="" />
        </div>
      </Marker>
      <div className="carMarker__status">
        <p>Longitude: {longitude}</p>
        <p>Latitude: {latitude}</p>
        <p>Direção: {direction}</p>
        <p>Velocidade: {speed}</p>
      </div>
    </>
  )
}
