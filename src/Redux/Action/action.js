export const Increment = () => {
    return {
        type: "INCREMENT",
    }
};
export const Decrement = () => {
    return {
        type: "DECREMENT"
    }
};
export const Remove = (Quantity)=>{
    return{
        type:"RemoveQuantity",
        payload:Quantity
    }
}
export const AddToCartItem = (Product) => {
    return {
        type: "AddCart",
        payload:Product
    }
};
export const RemoveToCartItem = (Product)=>{
    return{
        type:"RemoveFromCart",
        payload:Product
    }
}
export const RemovefromCartItem =(Product)=>{
    return{
        type:"Remove",
        payload:Product
    }
}