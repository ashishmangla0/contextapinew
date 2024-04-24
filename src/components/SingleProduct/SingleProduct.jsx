import { useContext } from 'react';
import './SingleProduct.css';
import { DataContext } from '../../context/DataContext';
const SingleProduct = ({ prod }) => {
    const { cart, setCart } = useContext(DataContext);
    // const { title, description, price, thumbnail } = prod;


    const handleAddToCart = () => {
        setCart([...cart, prod])
    }


    return (
        <div className="product">
            <img src={prod?.thumbnail} alt={prod?.title} loading='lazy' />
            <div className="productDesc">
                <span style={{ fontWeight: 700 }}>{prod?.title}</span>
                <span>$ {prod?.price}</span>
            </div>
            <div>
                {prod?.description}
            </div>
            <div>
                {cart.includes(prod) ? (
                    <button
                        className="add remove"
                        onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                    >
                        Remove from Cart
                    </button>
                ) : (
                    <button className="add" onClick={() => setCart([...cart, prod])}>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    )
}

export default SingleProduct