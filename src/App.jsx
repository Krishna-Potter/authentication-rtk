import { Provider } from "react-redux";
import { store } from "./Redux/App/store";

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
