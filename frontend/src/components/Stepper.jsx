import React from "react";

export default function Stepper(props) {
  return (
    <div className="container mb-4">
      <div className="accordion mb-4 d-flex" id="accordionExample">
        {props.previousOwners.map((po, idx) => {
          if (idx != props.previousOwners.length - 1) {
            return (
              <div>
                <button
                  style={{
                    fontFamily: "Edu SA Beginner",
                    fontSize: "20px",
                  }}
                  className="btn inline"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={po.addr}
                >
                  <b>{po.name}</b>
                </button>
                <span> {"-------->>"} </span>
              </div>
            );
          }
          return (
            <div>
              <button
                style={{
                  fontFamily: "Edu SA Beginner",
                  fontSize: "20px",
                }}
                className="btn inline"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={po.addr}
              >
                <b>{po.name}</b>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
