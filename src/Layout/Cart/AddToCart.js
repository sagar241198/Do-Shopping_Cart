import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../../Componenets/Footer";
import { AddToCartItem, RemoveToCartItem, RemovefromCartItem, Decrement, Increment, Remove } from "../../Redux/Action/action";


const Cart = () => {
    const [Data, setData] = useState([])
    const data = useSelector((state) => { return state.cartReducer });
    const count = useSelector((state) => { return state.reducer });
    console.log(data);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setData(data);
    }, [count])

    // increment one quantity of product into cart
    function CardItemIncreasesByOne(data) {
        dispatch(Increment());
        dispatch(AddToCartItem(data));
        history.push('/AddToCart')
    }

    //removing one quantity of product from the cart
    function CardItemDecreasesByOne(data) {
        dispatch(RemoveToCartItem(data));
        dispatch(Decrement());
        history.push('/AddToCart')
    }

    //Removing the product from the cart
    function RemoveProductfrmoCart(data) {
        dispatch(RemovefromCartItem(data));
        dispatch(Remove(data.Quantity));
    }
    if (Data.length != 0) {
        return (
            <>
                <div className="container cartPage  " style={{ marginTop: "100px" }}>
                    <div className="container text-center w-25">
                        <h5 className="bg-dark text-white">Cart Products</h5>
                    </div>
                    {
                        Data.map((cartData, index) => {
                            return (
                                <div className="card my-5 w-75 m-auto" >
                                    <header className="bg-dark text-white d-flex justify-contenet ">
                                        <div className="Cart-Item" style={{ marginLeft: "20px" }}>
                                            <h4>Cart-Item</h4>
                                        </div>
                                        <div className="Cart-Id py-2 " style={{ marginRight: "20px" }}>
                                            <h6>#4274872{cartData.id}</h6>
                                        </div>
                                    </header>
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap">
                                            <div className="p-3">
                                                <img
                                                    style={{ width: "150px", height: "150px" }}
                                                    src={cartData.image}
                                                    alt="loading...." />
                                            </div>
                                            <div className="p-3 " style={{ width: "300px" }}>
                                                <p className="card-text text-muted ">{cartData.title} </p>
                                                <p className="card-text text-muted ">{cartData.category}</p>
                                                <p className="card-text text-muted "><b>{cartData.price*cartData.Quantity}$ </b>.</p>
                                            </div>
                                            <div className="p-3">
                                                <h5 className='text-center text-muted'>Quntity</h5>
                                                <button className="btn" onClick={() => CardItemDecreasesByOne(cartData)}>-</button>
                                                <input
                                                    type="text"
                                                    className="text-center m-3"
                                                    name="" id=""
                                                    value={cartData.Quantity}
                                                    style={{ width: "30px", border: "none" }}
                                                    disabled />
                                                <button className="btn" onClick={() => CardItemIncreasesByOne(cartData)}>+</button><br />
                                                <a className="btn btn-secondary form-control my-2"
                                                    onClick={() => RemoveProductfrmoCart(cartData)}><b>Remove</b>
                                                </a>
                                                {/* <a href="" className="btn btn-outline-success form-control my-2"><b>Order Now</b></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <div className="container cartPage  " style={{ marginTop: "100px" }}>
                    <div className="container text-center w-25">
                        <h5 className="bg-dark text-white">Cart Products</h5>
                    </div>
                    <div className="container text-center" style={{ marginTop: "100px" }}>
                        <h1>Empty Cart</h1>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Cart;