import { Children, createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({children}) =>{
    const [data,setData] = useState(null);
   const [loading,setLoading] = useState(true);
   const [error,setError] = useState(null);
    

    useEffect(() =>{
        const  fetchData = async() =>{
                try{
                    const response = await fetch('https://dummyjson.com/products?limit=10');
                    
                    const jsonData = await response.json();
                    console.log(jsonData);
                    setData(jsonData)
                }
                catch(error){
                    setError(error)
                }
                finally{
                    setLoading(false)
                }
        }
        fetchData();
    },[])




    const contextValue={
        data,
        loading,
        error
    }
return (
    <DataContext.Provider value={contextValue}>
        {children}
    </DataContext.Provider>
)
}

export default DataContextProvider