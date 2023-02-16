import React, { createContext, useEffect, useState,useContext, useReducer } from 'react';
import { initialState, productReducer } from '../state/ProductState/productReducer';

const PRODUCT_CONTEXT=createContext()

const ProductProvider = ({children}) => {
    const [data,setData]=useState([]);
    // const [state,dispatch]=useReducer(productReducer, initialState)

  useEffect(()=>{
    fetch("products.json")
    .then((res)=>res.json())
    .then((data)=>console.log(data));
  },[]);

  const value={
    data,
  }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts=()=>{
    const context=useContext(PRODUCT_CONTEXT);
    return context;
}
export default ProductProvider;