import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SingleProduct from "../SingleProduct/SingleProduct";
import useToggle from "../../hooks/useToggle";

const Cart = () =>{
    const {cart } = useContext(DataContext);
    const [isOn,toggleIsOn] = useToggle(false);

return(
    <>
<button onClick={toggleIsOn}>click me</button>
{isOn ? 'clicked': 'not clicked'}

        {cart?.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
    </>
)
}

export default Cart