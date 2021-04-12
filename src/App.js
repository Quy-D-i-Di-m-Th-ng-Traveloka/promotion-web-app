import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useEffect,useState} from 'react'
import Body from './Compoment/Body';
import Cards from './Compoment/Card';
import Footer from './Compoment/Footer';
import NavChinh from './Compoment/NavBar';
import NavPhu from './Compoment/SubNavBar'
import VoucherForm from './Compoment/VoucherForm';
import VoucherList from './Compoment/VoucherList';
import {firestore,storageRef} from './firebase.js'

function App() {

  const [cardVoucher,setCardVoucher]=useState([])

  const getVoucher = () =>{
   firestore.collection('voucher').where("status","==","Published").get().then(querySnapshot=>{
          const voucherArray=[];
          querySnapshot.forEach(doc=>voucherArray.push({...doc.data(),id:doc.id}))
          console.log(voucherArray)
          setCardVoucher(voucherArray)
          console.log(cardVoucher)
      }
  );    
}  

  const renderCard = (voucher,index)=>{
    return (<Cards imgSource={voucher.imgSource} cardDesc={voucher.cardDesc} expDate={voucher.expDate} index={index}/>)
  }



  useEffect(()=>{
    getVoucher();
  },[])

  return (
    <div className="App">
      {/* Trang khách hàng */}
      <NavChinh>
        <NavPhu/>
      </NavChinh>  
      <Body>
        {cardVoucher.map(renderCard)}
      </Body>
      <Footer/>   

      {/* Form đăng ký voucher */}
      <VoucherForm/>

      {/* Danh sách voucher đã đăng ký */}
      <VoucherList/>
    </div>
    
  );
}

export default App;
