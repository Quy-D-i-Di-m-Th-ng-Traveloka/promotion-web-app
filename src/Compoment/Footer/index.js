import React from 'react'
import './Footer.css'
import images from '../../images/importImages'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="column">
                    <div className="cl1">
                        <img src={images.traveloka_logo3} className="img" width="300px"></img>
                        <br>
                        </br>
                        <img src={images.rapidssl} width="80px" ></img>&emsp;
                        <img src={images.verisign} width="80px"></img> &emsp;
                        <img src={images.iata} width="70px"></img> <br></br>

                        <br></br>

                        <img src={images.bct} width="100px"></img> &emsp;
                        <img src={images.bct} width="100px"></img>
                        <br></br>

                    </div>
                    <br></br>
                <div className="hoptac">
                    <img src={images.battay} width="35px" className="imght"  ></img> &emsp;
                    Hợp tác với Traveloka &emsp;
                    </div>
                    <br>
                    </br><br>
                    </br>
                    <br></br>
                    <h3>Đối tác thanh toán</h3>

                    <img src={images.dt} width="350px"></img>
                    </div>

                <div className="column">
                    <table className="table" style={{color:'white'}}>
                    <tr>
                    <th><h3>Về Traveloka</h3></th>
                    <th><h3>Sản Phẩm</h3></th>

                    </tr>
                    <tr>
                    <td><a href="https://www.traveloka.com/vi-vn/how-to/bookflight" className="a" >Cách Đặt Chỗ</a></td>
                    <td><a href="https://www.traveloka.com/vi-vn/flight" className="a" >Vé Máy Bay</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.traveloka.com/vi-vn/contactus" className="a" >Liên Hệ Chúng Tôi</a></td>
                    <td><a href="https://www.traveloka.com/vi-vn/hotel" className="a" >Khách Sạn</a></td>
                    </tr>

                    <tr>
                    <td><a href="https://www.traveloka.com/vi-vn/help" className="a" >Trợ Giúp</a></td>
                    <td><a href="https://www.traveloka.com/vi-vn/packages" className="a" >Combo Tiết Kiệm</a></td>
                    </tr>

                    <tr>
                    <td><a href="https://www.traveloka.com/vi-vn/careers" className="a" >Tuyển Dụng</a></td>
                    <td><a href="https://www.traveloka.com/vi-vn/activities" className="a" >Experience</a></td>
                    </tr>

                    <tr>
                    <td><a href="https://www.traveloka.com/vi-vn/about-us" className="a" >Về Chúng Tôi</a></td>
                    <td><a href="https://www.traveloka.com/vi-vn/airport-transfer" className="a" >Đưa Đón Sân Bay</a></td>
                    </tr>
                    <tr>
                    <td>
                    </td>
                    <td><a href="https://www.traveloka.com/vi-vn/accommodation/villa" className="a1" >Biệt Thự</a></td>
                    </tr>
                    <tr>
                    <td><h3>Theo Dõi Chúng Tôi Trên</h3></td>
                    <td><a href="https://www.traveloka.com/vi-vn/accommodation/apartment" className="a1" >Căn Hộ</a></td>
                    </tr>
                    <tr>
                    <td ><a href="https://twitter.com/TravelokaVN" className="a"><img src={images.twitter} width="20px"></img>Twitter</a></td>
                    <td><a href="https://www.traveloka.com/vi-vn/car-rental" className="a" >Car Rental</a></td>
                    </tr>
                    <tr>
                    <td ><a href="https://www.facebook.com/TravelokaVN" className="a" ><img src={images.facebook} width="20px"></img>Facebook</a></td>
                    <td><a href="https://www.traveloka.com/vi-vn/train/japan.jp" className="a" >JR Pass</a></td>
                    </tr>
                    <tr>
                    <td ><a href="https://www.instagram.com/accounts/login/?next=/traveloka/" className="a" ><img src={images.instagram} width="20px"></img>Instagram</a></td>
                    </tr>

                    <tr>
                    <td><a href="https://www.youtube.com/channel/UC8CFZEHmg6ujiUyhRwrBZjg" className="a" ><img src={images.youtube} width="20px"></img>Youtube</a></td>
                    </tr>

                    </table>

                </div>

                <div className="column">

                    <div className="col3">
                    <tr><h3>Khác</h3></tr>
                    <tr><a href="https://www.traveloka.com/vi-vn/affiliate" className="a">Traveloka Affilliate</a></tr>
                    <tr><a href="https://www.traveloka.com/vi-vn/explore" className="a">Traveloka Blog</a></tr>
                    <tr><a href="https://www.traveloka.com/vi-vn/privacypolicy" className="a">Chính sách quyền riêng tư</a></tr>
                    <tr><a href="https://www.traveloka.com/vi-vn/termsandconditions" className="a">Điều khoản Điều kiện</a></tr>
                    <tr><a href="https://drive.google.com/open?id=1kUOhF-SWUkQ7n00diuyWk2fSGFeZyOwgbba1FF2-21s" className="a">Quy chế hoạt động</a></tr>
                    <tr><a href="https://tera.traveloka.com/v2/landing/" className="a">Đăng ký nơi nghỉ của bạn</a></tr>
                    <tr><a href="https://axes.traveloka.com/" className="a">Đăng ký doanh nghiệp hoạt động du lịch của bạn</a></tr>
                    <tr><a href="https://www.traveloka.com/en-id/explore/news" className="a">Khu vực báo chí</a></tr>
                    <tr><h3 >Tải ứng dụng Traveloka</h3></tr>
                    <tr><a href="https://play.google.com/store/apps/details?id=com.traveloka.android&referrer=adjust_reftag%3DcKFyUKuhUWRU5%26utm_source%3DTraveloka%2BDesktop"><img src={images.googleplay} width="200px"></img></a></tr>
                    <br></br>
                    <tr><a href="https://apps.apple.com/app/id898244857?mt=8"><img src={images.applestore} width="200px"></img></a></tr>
                    </div>
                    </div>

                </div>
                <hr></hr>
                <div className="p">
                    <p>Công ty TNHH Traveloka Việt Nam . Mã số DN : 0313581779 . Tòa nhà An Phú , 117-119 Lý Chính Thắng , P7 ,Q3 , TPHCM</p>
                    <p>Copyright &copy; 2021 Traveloka</p>
                </div>
        </div>


    )
}

export default Footer
