import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const RegisterNew = () => {
  const [name, setName] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [landId, setLandId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);

  const { user } = useSelector(s => s);
  const navigate = useNavigate();
  useEffect(() => {
      if (!user.user) {
          navigate('/login')
      }
  })

  const saveLandDetails = async (data) => {
    try {
        console.log(data);
        var dataToSend = data;

        var config = {
            method: 'post',
            url: '/sql/landDetails',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : dataToSend
        };
        const response  = await axios(config);
        console.log(response);
        navigate('/');
    }
    catch(err) {
        console.log(err);
        alert("Please enter correct details");
    }
};


  const onClickHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const dataToSend = JSON.stringify({
      name, line1, line2, city, state, postalCode, landId, imageUrl, price
    });
    await saveLandDetails(dataToSend);
    setIsLoading(false);
  };

  return (
    <div
      className="container-patrimony"
      style={{ backgroundImage: 'url("bg.jpg")' }}
    >
      <div className="wrap-patrimony">
        <form className="patrimony-form">
          <span className="patrimony-form-logo">
            <i className="zmdi zmdi-landscape"></i>
          </span>

          <span className="patrimony-form-title" style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}>Register Your Land</span>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="owner name"
              placeholder="Owner name"
              onChange={(e) => setName(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf175;"
            ></span>
          </div>
          
          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="Address Line 1"
              placeholder="Address Line 1"
              onChange={(e) => setLine1(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf175;"
            ></span>
          </div>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="Address Line 2"
              placeholder="Address Line 2"
              onChange={(e) => setLine2(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf18d;"
            ></span>
          </div>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf132;"
            ></span>
          </div>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="State"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf173;"
            ></span>
          </div>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="Postal Code"
              placeholder="Postal Code"
              onChange={(e) => setPostalCode(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf1ab;"
            ></span>
          </div>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="Unique Land Id"
              placeholder="Unique Land Id"
              onChange={(e) => setLandId(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf1b4;"
            ></span>
          </div>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="Land Image URL"
              placeholder="Land Image URL"
              onChange={(e) => setImageUrl(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf17f;"
            ></span>
          </div>

          <div className="wrap-patrimony-input">
            <input
              className="patrimony-input"
              type="text"
              name="Land Price"
              placeholder="Land Price"
              onChange={(e) => setPrice(e.target.value)}
              style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}
            />
            <span
              className="focus-patrimony-input"
              data-placeholder="&#xf17f;"
            ></span>
          </div>

          <div className="container-patrimony-form-btn">
            {!isLoading ? (
              <button className="patrimony-form-btn" onClick={onClickHandler} style={{fontFamily: 'Pacifico', fontSize: '20px'}}>
                Register
              </button>
            ) : (
              <button className="patrimony-form-btn" type="button" disabled>
                <span
                  className="spinner-border spinner-border-md"
                  style={{ marginRight: "10px" }}
                  role="status"
                  aria-hidden="true"
                >
                  {" "}
                </span>
                <span className="mx-auto">Registering Your Land ...</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterNew;
