import "./ContentMaterials.css";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

export const ContentMaterials = observer(() => {
  const { content } = useContext(Context);
  return (
    <>
      <main className="loading">
        <section className="loading__background">
          {content.Materials.map((item) => (
            <form className="loading__form" key={item.MaterialID}>
              <div className="loading__form-name">{item.Name}</div>
              <div className="loading__form-files">
                <div className="loading__files-video">{item.Video}</div>
                <div className="loading__files-pdf">{item.File}</div>
              </div>
            </form>
          ))}
        </section>
        <div className="loading__button">
          <button className="loading__button-add">Добавить тему</button>
        </div>
      </main>
    </>
  );
});

export default ContentMaterials;
