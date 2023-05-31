import React, { useEffect, useState } from "react";
import { INCORRECT_VALUE_FOR_LAND_IMAGE_URL, DEFAULT_LAND_IAMGE_URL } from "../helpers/constants";
import { useParams } from "react-router-dom";
import Stepper from "./Stepper";
import { toTitleCase } from '../helpers/utils';
import { useSelector } from "react-redux";


export default function Details() {
  const [land, setLand] = useState(null);
  const state = useSelector(s => s);
  
  useEffect(()=> {
    if(state.user.selectedLand) setLand(state.user.selectedLand);
  }, [])

  if (!land) return null;

  return (
    <>
        <div className="container">
          <div className="row justify-content-start p-3">
            <div className="col-auto my-4">
              <img
                src = {!land.imageUrl || INCORRECT_VALUE_FOR_LAND_IMAGE_URL.includes(land.imageUrl.toUpperCase()) ? DEFAULT_LAND_IAMGE_URL : land.imageUrl }
                className="img-thumbnail"
                alt="land image"
                class="row-xs-6"
                style={{ width: "90%", marginTop: "55px", borderRadius : '5px', boxShadow: '5px 5px 5px grey' }}
              ></img>
            </div>
            <div className="col-auto my-4" style={{ paddingLeft: "12px" }}>
              <div className="details row-xs-6">
                <h2
                  className="mt-4 mx-6"
                  style={{ fontFamily: "Pacifico", fontSize: "32px" }}
                >
                  Land Details
                </h2>
                <hr />
                <table className="table table-borderless">
                  <tr>
                    <td style={{ fontFamily: "Pacifico", fontSize: "20px" }}>
                      Current Owner Name
                    </td>
                    <td
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      <strong>
                        {land.name}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: "Pacifico", fontSize: "19px" }}>
                      Address Line 1
                    </td>
                    <td
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      <strong>
                        {toTitleCase(land.line1)}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: "Pacifico", fontSize: "19px" }}>
                      Address Line 2
                    </td>
                    <td
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      <strong>
                        {toTitleCase(land.line2)}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: "Pacifico", fontSize: "20px" }}>
                      City
                    </td>
                    <td
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      <strong>{land.city.toString()} </strong>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: "Pacifico", fontSize: "20px" }}>
                      State
                    </td>
                    <td
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      <strong>{land.state.toString()}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: "Pacifico", fontSize: "20px" }}>
                      Pincode
                    </td>
                    <td
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      <strong>{land.postalCode}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: "Pacifico", fontSize: "20px" }}>
                      Price
                    </td>
                    <td
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      <strong>{land.price}</strong>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          </div>

    </>
  );
}
