import ReactDOM from "react-dom";
import GlobalStyle from "./global-style";
import Navgation from "./components/navigation";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navgation />
        <MainPage />
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));