import React from "react";
import TokenDetails from "../TokenDetails/TokenDetails";
import "./Tokenamics.css";

function Tokenamics() {
  return (
    <div className="tokenamics__page">
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-7 left">
              <div className="img">
                <img className="pie" src="piechart.png" alt="" />
              </div>
              <div className="bttn">
                <button className="purchase-btn position-relative">
                  Purchase HIVE{" "}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                    <img className="bee-img" src="honeybee.svg" alt="" />
                  </span>{" "}
                </button>
              </div>
            </div>
            <div className="col-5 table-div">
              <div className="table">
                  <TokenDetails/>
                  <TokenDetails/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tokenamics;
