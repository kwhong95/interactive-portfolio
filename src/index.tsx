import ReactDOM from "react-dom";
import GlobalStyle from "./global-style";

const App: React.FC = () => {
  return (
    <main>
      <GlobalStyle />
      <h1>Welcome to My Portfolio WebSite!</h1>
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));