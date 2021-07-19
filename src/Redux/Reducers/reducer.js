export const InitialState=0;
export  const reducer = (state = InitialState ,{type,payload})=>{
switch(type){
    case "INCREMENT":
        return   state +1;
    case "DECREMENT":
        return state-1;
    case "RemoveQuantity":
        return state-payload ;
    default:
        return state;        
}
}