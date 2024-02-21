//import { Redirect } from "react-router-dom";
import ContentMagazine from "../Components/ContentMagazine/ContentMagazine";
import HeaderMagazine from "../Components/HeaderMagazine/HeaderMagazine";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import ContentTranslate from "../Components/ContentTranslate/ContentTranslate";
import { useState } from "react";
import HeaderProgress from "../Components/HeaderProgress/HeaderProgress";
import ContentHelp from "../Components/ContentHelp/ContentHelp";
import HeaderMaterials from "../Components/HeaderMaterials/HeaderMaterials";
import ContentProgress from "../Components/ContentProgress/ContentProgress";

export default function Home() {
  const [tab, setTab] = useState("magazine");
  return;
  <>
    {/*<Redirect to="login"></Redirect>*/}
    <Header />

    <main className="main">
      <Menu active={tab} onChange={(current) => setTab(current)} />
      {tab === "magazine" && (
        <aside className="magazine">
          <HeaderMagazine />
          <ContentMagazine />
        </aside>
      )}
      {tab === "translate" && (
        <aside className="translate">
          <ContentTranslate />
        </aside>
      )}
      {tab === "materials" && (
        <aside className="materials">
          <HeaderMaterials />
        </aside>
      )}
      {tab === "progress" && (
        <aside className="progress">
          <HeaderProgress />
          <ContentProgress />
        </aside>
      )}
      {tab === "help" && (
        <aside className="help">
          <ContentHelp />
        </aside>
      )}
    </main>
  </>;
}
