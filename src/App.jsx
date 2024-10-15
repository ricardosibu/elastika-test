import { Provider } from "react-redux";
import { ChatAI } from "./ui/ChatAI";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ChatAI />
      </Provider>
    </>
  );
}

export default App;
