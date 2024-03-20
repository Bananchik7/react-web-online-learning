import "./ContentMaterials.css";

export default function ContentMaterials() {
  const { materials } = useContext(Context);
  return (
    <>
      <main className="materials">
        <form className="material__form">
          <div className="material__form-name"></div>
          <div className="material__form-files">
            <div className="material__files-video"></div>
            <div className="material__files-pdf"></div>
          </div>
        </form>
      </main>
    </>
  );
}
