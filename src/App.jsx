import "./App.css";
import ContentMagazine from "./Components/ContentMagazine/ContentMagazine";
import ContentMenuMagazine from "./Components/ContentMenuMagazine/ContentMenuMagazine";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Menu />
        <div className="content">
          <ContentMenuMagazine />
          <ContentMagazine />
        </div>
      </div>
    </>
  );
}

export default App;
