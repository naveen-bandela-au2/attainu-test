import React from "react";
import Citylist from "./Citylist";
import Poardetails from "./Poardetails";


function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-2">
       
          <Citylist />
        </div>
        <section className="col-10">
          <Poardetails/>
        </section>
      </div>
    </div>
  );
}

export default App;
