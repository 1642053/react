import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
Axios({
  method: 'GET',
  url: 'http://localhost:3001'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

const Product = () => {
    const {id} = useParams();

    return( <div> Product: {id} </div> )
}


export default Product;
