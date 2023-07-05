import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

const ProductDetail = () => {
    const{id}=useParams()
    
  

    useEffect(()=>{
      fetchData()
    },[])
    

    const [data, setdata] = useState('')
    const [images, setimages] = useState([])
    const [image, setimage] = useState('')


     const fetchData=async()=>{
      const res=await fetch(`https://dummyjson.com/products/${id}`)
      const response= await res.json()
      setdata(response)
      console.log(response)
      setimages(response.images)
     setimage(response.images[0])
     }
    
   
    console.log(data)


  return (
    <div>
          
      

    <Container fluid>
      <Row>
      <Col sm={7}>
      <Image src={image} height="350px"  width="350px"  />
      
      </Col>
      <Col sm={5}>
      
      <h1>{data.title}</h1>
      <h3>Price: {data.price}</h3>
      <h5>Rating:{data.rating}</h5>
      <h4>{data.description}</h4>
      </Col>
      </Row>
      <br/>
      
      {
          images.map((item)=>{
            return(
              <>
               <img  onClick={()=>setimage(item)} src={item} height="150px"  width="150px" />
              </>
            )
          })
        }
    </Container>



        

        
    </div>
  )
}

export default ProductDetail