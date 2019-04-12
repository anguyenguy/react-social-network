import React from 'react';
import './Navigation.css';

const navigation = () => {
    return(
        <div className="Navigation d-flex align-items-center justify-content-around">
            <img className="ImageLogo ml-5" alt="hinh" src="../src/assets/logo.png"/>
            <div className="NameSite ml-5">YOUSE</div>
            <div className="SignIn d-flex">
                <div className="AccountLogin ml-3">
                    <div><span className="text-white">Email hoặc điện thoại</span></div>
                    <input></input>
                </div>
                <div className="PasswordLogin ml-3 d-flex">
                    <div>
                        <div><span className="text-white">Mật khẩu</span></div>
                        <input></input>
                        <div><span className="Forget mt-3 text-white-50">Quên tài khoản</span></div>
                    </div>
                    <div className="d-flex align-items-center ml-3">
                        <button type="button" className="btn btn-info">Đăng nhập</button>
                    </div>
                    
                </div>                
            </div>
        </div>
    );
}

export default navigation;