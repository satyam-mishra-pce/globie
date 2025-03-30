import { create } from "zustand";
import { Map } from "mapbox-gl";

type State = {
  map: Map | null;
  isLocationFound: boolean;
  currentMarker: mapboxgl.Marker | null;
  setLocationFound: (found: boolean) => void;
};

type Actions = {
  setMap: (map: Map | null) => void;
  setCurrentMarker: (marker: mapboxgl.Marker | null) => void;
};

const useMapStore = create<State & Actions>((set) => ({
  map: null,
  currentMarker: null,
  isLocationFound: false,
  setMap: (map: Map | null) => set({ map }),
  setCurrentMarker: (marker: mapboxgl.Marker | null) => set({ currentMarker: marker }),
  setLocationFound: (found: boolean) => set({ isLocationFound: found }),
}));

export default useMapStore;