import "./App.css";
import ContentMagazine from "./Components/ContentMagazine/ContentMagazine";
import HeaderMagazine from "./Components/HeaderMagazine/HeaderMagazine";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import ContentTranslate from "./Components/ContentTranslate/ContentTranslate";
import { useState } from "react";
import HeaderProgress from "./Components/HeaderProgress/HeaderProgress";
import ContentHelp from "./Components/ContentHelp/ContentHelp";
import HeaderMaterials from "./Components/HeaderMaterials/HeaderMaterials";
import ContentProgress from "./Components/ContentProgress/ContentProgress";

function App() {
  const [tab, setTab] = useState("magazine");

  return (
    <>
      <Header />

      <div className="main">
        <Menu active={tab} onChange={(current) => setTab(current)} />
        {tab === "magazine" && (
          <div className="magazine">
            <HeaderMagazine />
            <ContentMagazine />
          </div>
        )}
        {tab === "translate" && (
          <div className="translate">
            <ContentTranslate />
          </div>
        )}
        {tab === "materials" && (
          <div className="materials">
            <HeaderMaterials />
          </div>
        )}
        {tab === "progress" && (
          <div className="progress">
            <HeaderProgress />
            <ContentProgress />
          </div>
        )}
        {tab === "help" && (
          <div className="help">
            <ContentHelp />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
