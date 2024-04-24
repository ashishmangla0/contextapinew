import { Link } from "react-router-dom"
import useToggle from "../../hooks/useToggle"

const Header = () =>{
    const [isheaderclick,setIsHeader] = useToggle(false);
return(
    <header>

        {isheaderclick ? 'state from header is clicked': 'state from header is not clicked'}
        <button onClick={setIsHeader}>header click</button>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
)
}

export default Header