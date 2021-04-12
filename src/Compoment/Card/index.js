import React from 'react'
import Card from 'react-bootstrap/Card'
import './Card.css'
import traveloka from '../../images/traveloka.png';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {
    return (
        <div style={{maxHeight:'400px'}}>
            <Card>
                <Card.Img src={props.imgSource} id={props.index}/>
                <Card.Body>
                    <Card.Text>
                    {props.cardDesc}
                    </Card.Text>
                    <Card.Text>
                        <div id='hanSuDung'>
                            <p>Thời gian đặt vé: Đến hết {props.expDate}</p>
                        </div>
                    </Card.Text>
                    <Button style={{width:'100%'}}>Xem Ngay</Button>
                </Card.Body>
            </Card>       
        </div>
    )
}

export default Cards
