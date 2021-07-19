import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCartItem, Decrement, Increment } from '../Redux/Action/action';
import CarouselBlock from './HomeCerousal';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    const Number = useSelector((state) => { return state.reducer });
    const dispatch = useDispatch();
    const [Data, setData] = useState([]);
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
            <div>
                <CarouselBlock />
                <div className="container my-5">
                    <div className="d-flex flex-wrap justify-contenet-center">
                        {
                            Data.map((data, id) => {
                                let url = `/More_about-product-{id}=${data.id}/${data.category}`
                                return (
                                    <div className="card p-3" style={{ width: "16rem" }}>
                                        <NavLink to={url}>
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
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Home