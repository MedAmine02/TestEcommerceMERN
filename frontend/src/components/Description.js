import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import db from '../db';
import ListGroup from 'react-bootstrap/ListGroup';





const Description = () => {
    const { id } = useParams();

    //on declare une variable qui s'appelle product , et on stock la valeur que retourne la fonction find , puisque on cherche l'id du produit p
    const product = db.find((p) => p.id === id)
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            <Row>

                <Col>
                    <Image src={'../' + product.image} alt={product.name} fluid />
                </Col>
                <ListGroup variant="flush">
                    <ListGroup>{product.name}</ListGroup>
                    <ListGroup>{product.description}</ListGroup>
                    <ListGroup>{product.brand}</ListGroup>
                    <ListGroup>{product.categorie}</ListGroup>
                </ListGroup>


                <Col>
                    <ListGroup >
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>{product.price} DH</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup></ListGroup>
                        <ListGroup></ListGroup>

                    </ListGroup>  </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default Description