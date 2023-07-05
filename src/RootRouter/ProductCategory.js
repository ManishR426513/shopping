import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    
    const {id}=useParams()


    const [product, setproduct] = useState([])

    useEffect(()=>{
        
      fetchProducts()
    },[id])


    const fetchProducts=async()=>{
             await axios.get(`https://dummyjson.com/products/category/${id}`)
             .then((response)=>{
              
              setproduct(response.data.products)
             }).catch((error)=>{
              console.log(error)
             })
             
            }
  
    return (
    <div>

       
      <h1 style={{textAlign:"center"}}>{id}</h1>
      <br/>

      <Container fluid>
      <Row>
 
      {
        product&&product.length>0&&product.map((item)=>{
          return(
            <>
               <Col sm={4} style={{textAlign:"center"}} >
               <Link to={`/product/${item.id}`} > 
               
               <img src={item.images[0]} height="250px" width="250px"  />
               
               </Link>
               <h4>{item.title}</h4>
               <br/>
              
               </Col>  

               
            </>
          )
        })
      }
     
 </Row>
      </Container>
     


      

      

    </div>
  )
}

export default ProductCategory