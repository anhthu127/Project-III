import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
            
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-3 bg-dark">
                   
                   <ul className="navbar-nav">
                        <a classname="navbar-brand" href="#">
                         <img src="image/02.png" alt="Logo" style={{width: '250px', height:'80px'}} />
                         <i className="fa fa-angle-double-left"></i>
                        </a>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-home"></i>  &nbsp; Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-user"></i> &nbsp; Phân quyền</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-users"></i>  &nbsp;Nhà phân phối</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">  <i className="fa fa-users"></i> &nbsp; Đơn hàng</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-user-md"></i>&nbsp; Dùng thử</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-bars"></i>&nbsp; Quản lý key</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-retweet"></i> &nbsp; Yêu cầu đổi key cấp dưới</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-users"></i> &nbsp; quản lý mã giám giá</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-outdent"></i> &nbsp; Báo cáo</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-qrcode"></i> &nbsp; Công cụ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-bell"></i> &nbsp; Quản lý thông báo</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9 bg-light" id="admin">
                    <div className="admin">
                    <p> Hi, admin </p>
                    <img src="image/01.JPG" alt="" style={{ width:'30px', height:'30px'}}/>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-9" id="content" style={{backgroundColor:'yellowgreen', marginLeft:'25%'}}>
                <p>hello</p>
                </div>
                </div>
              
            </div>
            </div>

        );  
    }
}

export default Home;