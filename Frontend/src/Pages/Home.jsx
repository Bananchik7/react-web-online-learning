import ContentMagazine from "../Components/PagesMagazine/ContentMagazine/ContentMagazine";
import HeaderMagazine from "../Components/PagesMagazine/HeaderMagazine/HeaderMagazine";
import Menu from "../Components/Menu/Menu";
import ContentTranslate from "../Components/ContentTranslate/ContentTranslate";
import { useState } from "react";
import HeaderProgress from "../Components/HeaderProgress/HeaderProgress";
import ContentHelp from "../Components/PagesHelp/ContentHelp/ContentHelp";
import ContentProgress from "../Components/ContentProgress/ContentProgress";
import Header from "../Components/Header/Header";
import ContentMaterials from "../Components/ContentMaterials/ContentMaterials";

export default function Home() {
  const [tab, setTab] = useState("magazine");
  return (
    <>
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
            <ContentMaterials />
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
    </>
  );
}
