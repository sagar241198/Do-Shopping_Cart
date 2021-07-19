import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { AddToCartItem, Increment } from '../Redux/Action/action';
import { useDispatch } from 'react-redux';
import Footer from '../Componenets/Footer';

const Producinfo = () => {
    const [Data, setData] = useState([]);
    const dispatch = useDispatch();
    const params = useParams();

    let catgry = params.cat;


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products ').then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    function HandleInput(data) {
        dispatch(Increment());
        dispatch(AddToCartItem(data));
    }

    return (
        <>
            <div className="container w-75 cartPage " style={{ marginTop: "100px" }}>
                <div className="container bg-dark text-center text-white">
                    <h5>
                        More About Product
                    </h5>
                </div>
                <div className="container my-5 ">
                    {
                        Data.map((data, index) => {
                            if (data.id == params.id) {
                                return (
                                    <>
                                        <div className="d-flex flex-wrap justify-contenet-center border p-3">
                                            <div className="image mr-2 ">
                                                <img
                                                    style={{ width: "150px", height: "150px" }}
                                                    src={data.image}
                                                    alt="Card image cap"
                                                />
                                            </div>
                                            <div className="details my-2 font-size" style={{ width: "30rem" }}>
                                                <p className="text-muted m-2 "><b>{data.title}</b> </p>
                                                <p className="text-muted m-2">{data.category},</p>
                                                <p className="text-muted m-2">{data.description}</p>
                                                <p className="text-muted m-2">price <b>{data.price}$</b> </p>
                                            </div>
                                        </div>
                                    </>
                                ) 
                            }
                        })
                    }
                </div>
            </div>
            <hr />
            <div className="container my-3 text-center text-muted">
                <h6>
                    Related Products !
                </h6>
            </div>
            <div className="container my-5 ">
                <div className="d-flex flex-wrap justify-contenet-center">
                    {
                        Data.map((data, id) => {
                            if (data.category === catgry) {
                                return (
                                    <div className="card p-3" style={{ width: "16rem" }}>
                                        <NavLink to="/More_about-product">
                                            <img
                                                className="card-img-top"
                                                src={data.image}
                                                style={{ width: "150px", height: "150px" }}
                                                alt="Loading..."
                                            />
                                        </NavLink>
                                        <div className="card-body">
                                            <p className="card-title " style={{ fontSize: "12px" }}>
                                                <b>{data.title}</b>
                                            </p>
                                            <b className="text-secondary">{data.price}$</b>
                                            <a className="btn btn-warning right" onClick={() => HandleInput(data)}>
                                                <i className="fas fa-cart-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Producinfo;