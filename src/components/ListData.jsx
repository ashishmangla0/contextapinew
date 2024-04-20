import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ListData = () =>{
    const { data,loading,error } = useContext(DataContext);
    console.log(data);
    console.log(data?.products    );
    if (loading) {
        return <p>Loading data...</p>;
      }
      if (error) {
        return <p>Error: {error.message}</p>;
      }



return(
    <ul>

{data?.products?.map((item) => (
        <li key={item.id}>
            {item.title}
            <p>{item?.description}</p>
            </li>
      ))}
    </ul>
)
}

export default ListData