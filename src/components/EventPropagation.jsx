import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    console.log("Child clicked");
  };

  return (
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <div className="c-div" onClick={handleChildClick}>
            Child Div
          </div>
        </div>
      </div>
    </section>
  );
};
