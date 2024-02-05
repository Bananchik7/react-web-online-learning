import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Menu />
        <Content />
      </div>
    </>
  );
}

export default App;
