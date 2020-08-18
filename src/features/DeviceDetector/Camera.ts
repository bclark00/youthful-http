import {
  availableFeatures,
  useCamera as camera
} from "@ionic/react-hooks/camera";

export function useCamera() {
  const { photo, getPhoto } = camera();
  if (availableFeatures.getPhoto) {
    return { photo, getPhoto };
  } else return;
}
