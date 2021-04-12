import {React,useEffect,useState} from 'react'
import {firestore,storageRef} from '../../firebase.js'
import {Table,Button} from 'react-bootstrap'

const VoucherList = () => {

    const [listVoucher,setListVoucher]=useState([])
    

    const getVoucher = async () =>{
        firestore.collection('voucher').onSnapshot(querySnapshot=>{
            const voucherArray=[];
            querySnapshot.forEach(doc=>voucherArray.push({...doc.data(),id:doc.id})
            )
            setListVoucher(voucherArray)
            console.log(listVoucher)
        }
    );      
}  
    const handleDelete = async (id)=>{
        if(window.confirm('Bạn có chắc muốn xóa voucher này?'))
        { 
            await firestore.collection('voucher').doc(id).delete();
            console.log('Đã xóa voucher')
        }
        
    }

    const handlePublish = async (id)=>{
        await firestore.collection('voucher').doc(id).update({status:'Published'})
    }

    
    const renderVoucher=(voucher,index)=>{
        return(
            <tr key={index}>
                <td>{index}</td>
                <td>{voucher.partnerType}</td>
                <td>{voucher.cardDesc}</td>
                <td>{voucher.expDate}</td>
                <td>{voucher.mainDesc}</td>
                <td>{voucher.voucherCode}</td>
                <td>{voucher.voucherPrice}</td>
                <td>{voucher.imgSource}</td>
                <td>{voucher.status}</td>
                <td>{<Button variant="success" onClick={()=>handlePublish(voucher.id)}>Publish</Button>}</td>
                <td>{<Button variant="danger" onClick={()=>handleDelete(voucher.id)}>Delete</Button>}</td>
            </tr>
        )
    }
    

    useEffect(()=>{
        getVoucher();
    },[])

    return (
        <div>
            <Table striped bordered hover>
            <thead style={{textAlign:'center'}}>
                <tr>
                <th>#</th>
                <th>Loại đối tác</th>
                <th>Chú thích đơn giản</th>
                <th>Ngày hết hạn</th>
                <th>Chú thích đầy đủ</th>
                <th>Code Voucher</th>
                <th>Giá trị voucher</th>
                <th>Nguồn hình ảnh</th>
                <th>Trạng thái</th>
                <th colSpan='2'>Action</th>
                </tr>
            </thead>
            <tbody>
               {listVoucher.map(renderVoucher)}
            </tbody>
            </Table>
            
        </div>
    )
}

export default VoucherList
