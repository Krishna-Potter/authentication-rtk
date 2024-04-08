import { Provider } from "react-redux";
import { store } from "./Redux/App/store";
import { BrowserRouter as ParentRouter } from "react-router-dom";
import RouterConfig from "./Router/RouterConfig";

function App() {
  return (
    <ParentRouter>
      <Provider store={store}>
        <RouterConfig />
      </Provider>
    </ParentRouter>
  );
}

export default App;
