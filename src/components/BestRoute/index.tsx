import { useEffect, useState } from "react";
import { Layer, Source } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

type Props = {
  start: number[];
  end: number[];
};

export default function BestRoute({ start, end }: Props) {
  const [coords, setCoords] = useState<number[][]>([]);

  useEffect(() => {
    getRoute();
  }, []);

  const getRoute = async () => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${MAPBOX_ACCESS_TOKEN}`
    );
    const data = await response.json();
    const coords = data.routes[0].geometry.coordinates;
    setCoords(coords);
  };

  const geojson: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: coords,
        },
        properties: {},
      },
    ],
  };

  return (
    <>
      <Source id="routeSource" type="geojson" data={geojson}>
        <Layer
          id="roadLayer"
          type="line"
          layout={{ "line-join": "round", "line-cap": "round" }}
          paint={{
            "line-color": "black",
            "line-width": 7,
            "line-opacity": 0.8,
          }}
        />
      </Source>
    </>
  );
}
