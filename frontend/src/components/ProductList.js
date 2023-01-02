import React from 'react'
import db from '../db'
import Product from './Product'
import { Row, Col} from 'react-bootstrap'

const ProductList = () => {
  return (
    <>
    <div>ProductList</div>
    <Row>
    {db.map((product)=>
    (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product p={product} />
        </Col>

    ))}
    </Row>
    </>
  )
}

export default ProductList