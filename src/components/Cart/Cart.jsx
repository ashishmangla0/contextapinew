import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SingleProduct from "../SingleProduct/SingleProduct";

const Cart = () =>{
    const {cart } = useContext(DataContext);
    console.log(cart);
return(
    <>
        {cart?.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
    </>
)
}

export default Cart