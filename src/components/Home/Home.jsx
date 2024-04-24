import { useContext } from "react"
import { DataContext } from "../../context/DataContext";
import SingleProduct from "../SingleProduct/SingleProduct";
const Home = () => {
    const { data, loading, error } = useContext(DataContext);
    return (
        <>
        <div className="productContainer">
        {data?.products?.map((prod) => (
                <SingleProduct prod={prod} key={prod.id} />
            ))}
        </div>
            
        </>
    )
}

export default Home