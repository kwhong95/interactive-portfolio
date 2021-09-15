import ReactDOM from "react-dom";
import GlobalStyle from "./global-style";
import Navgation from "./components/navigation";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <main>
      <BrowserRouter>
      <GlobalStyle />
      <Navgation />
      <h1>Welcome to My Portfolio WebSite!</h1>
      </BrowserRouter>
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));