import "./App.css";
import ContentMagazine from "./Components/ContentMagazine/ContentMagazine";
import HeaderMagazine from "./Components/HeaderMagazine/HeaderMagazine";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import ContentTranslate from "./Components/ContentTranslate/ContentTranslate";
import { useState } from "react";
import ContentMaterials from "./Components/ContentMaterials/ContentMaterials";
import ContentProgress from "./Components/ContentProgress/ContentProgress";
import ContentHelp from "./Components/ContentHelp/ContentHelp";

function App() {
  //const [visible, setVisible] = useState(true);
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
            <ContentMaterials />
          </div>
        )}
        {tab === "progress" && (
          <div className="progress">
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
