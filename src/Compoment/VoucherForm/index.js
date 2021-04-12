import {React,useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './VoucherForm.css'
import {firestore,storageRef} from '../../firebase.js'

const VoucherForm = () => {

    const [imageAsFile, setImageAsFile] = useState('')
    const [fileUrl, setFileUrl] = useState("")

    const initialState = ({
        partnerType:'Máy Bay',
        cardDesc:'',
        expDate:'1/1/2000',
        mainDesc:'',
        voucherCode:'',
        voucherPrice:'',
        status:'Not Publish',
        imgSource:''
    })
    const [values,setValues]=useState(initialState)

    const handleSubmit =e =>
    {
        e.preventDefault();

        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const uploadTask = storageRef.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
            uploadTask.on('state_changed', 
            (snapShot) => {
            }, (err) => {
            }, () => {
            storageRef.ref('images').child(imageAsFile.name).getDownloadURL()
            .then(url => {
                setFileUrl(url)
                setValues(values.imgSource=url)
                firestore.collection('voucher').add({
                    partnerType:values.partnerType,
                    cardDesc:values.cardDesc,
                    expDate:values.expDate,
                    mainDesc:values.mainDesc,
                    voucherCode:values.voucherCode,
                    voucherPrice:values.voucherPrice,
                    status:values.status,
                    imgSource:url
                })
            })
        })
    }
    

    const handleInputChange=e=>{
        const {name,value}=e.target;
        setValues({
                ...values,
                [name]:value,
            }
        )
    }

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(image)
    }


    return (
        <div style={{width:'375px'}}>
            <Form id="formVoucher" onSubmit={handleSubmit}>
                <Form.Group controlId="formPartner">
                    <Form.Label>Loại đối tác</Form.Label>
                    <Form.Control as="select" name='partnerType' onChange={handleInputChange}>
                        <option name='partnerType' value='Máy Bay'>Máy bay</option>
                        <option name='partnerType' value='Khách sạn'>Khách sạn</option>
                        <option name='partnerType' value='Thuê xe'>Thuê xe</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formCardDesc">
                    <Form.Label>Chú thích đơn giản</Form.Label>
                    <Form.Control as="textarea" placeholder="Nhập chú thích ngắn gọn" name='cardDesc' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formExpDate">
                    <Form.Label>Ngày hết hạn</Form.Label>
                    <Form.Control type="date" name='expDate' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formMainDesc">
                    <Form.Label>Chú thích đầy đủ</Form.Label>
                    <Form.Control as="textarea" placeholder="Nhập chú thích đầy đủ" name='mainDesc' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formVoucherCode">
                    <Form.Label>Code Voucher</Form.Label>
                    <Form.Control type="text" placeholder="Nhập code voucher" name='voucherCode' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formVoucherPrice">
                    <Form.Label>Trị giá voucher</Form.Label>
                    <Form.Control type="text" placeholder="Nhập giá trị voucher" name='voucherPrice' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formImgSource">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.File name='imgSource' onChange={handleImageAsFile}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VoucherForm
