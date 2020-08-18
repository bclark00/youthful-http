import Loadable from "react-loadable";
import Spinner from "../features/LoadingScreens/Spinner";

const LoadableHome = Loadable({
  loader: () => import("./Home"),
  loading: Spinner
});

export default LoadableHome;
