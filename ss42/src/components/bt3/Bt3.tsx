import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Bt3() {
  return (
    <div>
        Bt3:
          <br />
          <div style={{display:"flex", gap:"30px"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px"}}>
                        <Button variant="primary">Go somewhere</Button>
                        <Card.Text>30.000.000 đ</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px"}}>
                        <Button variant="primary">Go somewhere</Button>
                        <Card.Text>30.000.000 đ</Card.Text>
                    </div>
                </Card.Body>
            </Card>
          </div>
    </div>
  )
}
