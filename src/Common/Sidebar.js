import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
   


  const [productCategory, setproductCategory] = useState([])

  useEffect(()=>{
    fetchProductCategory()
  },[])


  const fetchProductCategory=async()=>{
    await axios.get(`https://dummyjson.com/products/categories`)
    .then((response)=>{
      setproductCategory(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
 }

 console.log(productCategory)
  return (
    <>
    
    <h4>Select Category</h4>


    {
      productCategory&&productCategory.length>0&&productCategory.map((item)=>{
        return(
          <>
         <Link to={`/category/${item}`} >   <option value={item}  >  <h5> {item}</h5> </option></Link>
          </>
        )
      })
    }
      

    </>
  )
}

export default Sidebar