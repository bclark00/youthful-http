import Loadable from "react-loadable";
import Spinner from "../features/LoadingScreens/Spinner";

const LoadableTab2 = Loadable({
  loader: () => import("./Tab2"),
  loading: Spinner
});

export default LoadableTab2;
