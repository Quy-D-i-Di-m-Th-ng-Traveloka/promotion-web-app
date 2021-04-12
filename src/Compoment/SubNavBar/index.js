import React from 'react'
import './SubNavBar.css'

function NavPhu()
{
    return(
        <div id="navBarPhu">
            <ul>
                <li>
                <span className="fas fa-plane-departure"></span>
                    <a href="#">Vé máy bay</a>
                </li>
                <li>
                    <span className="far fa-building"></span>
                    <a href="#">Khách sạn</a>
                </li>
                <li>
                    <span class="fab fa-affiliatetheme"></span>
                    <a href="#">Combo tiết kiệm</a>
                </li>
                <li>
                    <span className="fas fa-taxi"></span>
                    <a href="#">Đưa đón sân bay</a>
                </li>
                <li>
                    <span className="fab fa-xing"></span>
                    <a href="#">Xperience</a>
                </li>
                <li>
                    <span className="fas fa-key"></span>
                    <a href="#">Cho thuê xe</a>
                </li>
                <li>
                    <span class="fas fa-subway"></span>
                    <a href="#">JR Pass</a>
                </li>
            </ul>
        </div>

    );
}

export default NavPhu

