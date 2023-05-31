import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { DEFAULT_LAND_IAMGE_URL, INCORRECT_VALUE_FOR_LAND_IMAGE_URL } from "../helpers/constants";
import Loader from './Loader';
import axios from 'axios';
import { setLand } from '../features/user/userSlice';

const Buy = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [lands, setLands] = useState([])

    const state = useSelector(s => s);
    const navigate = useNavigate();
    useEffect(() => {
        if (!state.user.user) {
            navigate('/login')
        }
        onPageLoadHandler();
    }, []);

    const getAllLands = async (username, password) => {
      try {
          console.log(username, password);
          var data = JSON.stringify({
              "username": username,
              "password": password
          });

          var config = {
              method: 'get',
              url: '/sql/landDetails',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
          };
          const response  = await axios(config);
          setLands(response.data);
      }
      catch(err) {
          console.log(err);
          alert("Please enter correct user details");
      }
    };

    const onPageLoadHandler = async () => {
        setIsLoading(true)
        await getAllLands();
        setIsLoading(false)
    }

    const detailshandler = (land) => {
      dispatch(setLand(land));
      navigate(`/details/${land.landId}`);
    }

    console.log(lands)

    return (
        <div className='buy'>
            {
                isLoading
                ? <Loader />
                : <div className='d-flex'>
                    {
                        lands.map((land, idx) => <div key={idx} className="container">
                        <section className="mx-auto my-5" style={{maxWidth: '23rem'}}>
                      
                          <div className="card">
                            <div className="card-body d-flex flex-row">
                              <img src="avatar.png" className="rounded-circle me-3" height="50px"
                                width="50px" alt="avatar" />
                              <div>
                                <h5 className="card-title font-weight-bold mb-2">{land.landId}</h5>
                                <p className="card-text"><i className="far fa-clock pe-2"></i>{land.state}</p>
                              </div>
                            </div>
                            <div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                              <img className="img-fluid" src={!land.imageUrl || INCORRECT_VALUE_FOR_LAND_IMAGE_URL.includes(land.imageUrl.toUpperCase()) ? DEFAULT_LAND_IAMGE_URL : land.imageUrl }
                                alt="Card image cap" />
                            </div>
                            <div className="card-body">
                              <p className="card-text collapse" id="collapseContent">
                                
                              </p>
                              <div className="d-flex justify-content-between">
                                <button className="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse" onClick={() => detailshandler(land)}
                                  role="button" aria-expanded="false" aria-controls="collapseContent">Read more</button>
                                <div>
                                  <i className="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                    data-mdb-placement="top" title="Share this post"></i>
                                  <i className="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip" data-mdb-placement="top"
                                    title="I like it"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </section>
                      </div>)
                    }
                </div>
            }
        </div>
    );
};

export default Buy;