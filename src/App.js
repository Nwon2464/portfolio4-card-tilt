import React from "react";
import { colorData } from "./colorData";
const App = () => {
  return (
    <div className="container">
      {colorData.map((e, i) => {
        return (
          <div className="card">
            <div style={{ background: `${e.color}` }} className="circle">
              <h2>0{i + 1}</h2>
            </div>
            <div className="content">
              <p style={{ padding: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                beatae ipsam, excepturi ipsum dolores nostrum aut libero
                molestias magni sed suscipit voluptatem consectetur repellat,
                ducimus accusantium. Perspiciatis optio molestias dicta.
              </p>
              <a href="#" style={{ background: `${e.color}` }}>Read more</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
