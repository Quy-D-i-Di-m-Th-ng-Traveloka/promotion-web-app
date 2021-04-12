import React from 'react';
import Button from 'react-bootstrap/Button'
import './Body.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import option from '../../Data/promotionOption-data.js'


const Body = (props) => {
    var camalize = function camalize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

    function removeAccents(str) {
        return str.normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }

    const cardMarkup = (option.map(x=> 
    <div>
        <Card>
            <Card.Header>
                <p style={{fontWeight:'bold'}}>{x.header}</p>
                {x.desc}                
            </Card.Header>
            <Card.Body>
                {x.luaChon.map(checkBoxDesc=>(
                    <div>
                    <Form>
                        <Form.Check  customtype='checkbox' id={camalize(removeAccents(checkBoxDesc))} label={checkBoxDesc}/>
                    </Form>
                    </div>
                ))}        
            </Card.Body>
        </Card>
    </div>
))
   

    return (
        <div className='mainBody'>
            <h2>Cập nhật tất cả khuyến mãi hiện hành</h2>
            <p>Bạn đang chuẩn bị cho kỳ nghỉ hay bận rộn với chuyến công tác sắp tới? Hãy tiết kiệm hơn với 
                Traveloka! Xem ngay các khuyến mãi của chúng tôi ở dưới đây:
            </p>
            
            <Container fluid>
            <Row >
                <Col sm={3} id='checkBoxOption' style={{paddingLeft:'0px'}}>
                    <Button style={{width:'100%',marginBottom:'25px',fontWeight:'bold'}}>Đặt lại</Button>                 
                    {cardMarkup}
                </Col>
                <Col sm={9} style={{display:'flex',flexWrap:'wrap'}}>
                    {props.children}
                </Col>
            </Row>
            </Container>

        </div>
    )
}

export default Body
