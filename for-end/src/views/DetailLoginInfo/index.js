import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
class DetailLoginInfo extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }
  componentWillMount() {
    let userInfo = localStorage.getItem("userInfo");
    let userInfo1 = JSON.parse(userInfo);
    this.setState({
      user: userInfo1
    })
  }
  render() {
    return (
      this.state.user.map((item, index) => {
        return (
          <div className="gao-logininfo" key="index">
            <div className="gao-logininfo-username">
              <p>用户名</p>
              <Link to="updateUsername">{item.userName}<i className="iconfont icon-jiantou"></i></Link>
            </div>
            <div className="gao-logininfo-count">
              <p>账号绑定</p>
            </div>
            <div className="gao-logininfo-iphone">
              <p><i className="iconfont icon-chongzhi"></i>手机</p>
              <p>{item.phone}<i className="iconfont icon-jiantou"></i></p>
            </div>
            <div className="gao-logininfo-curity">
              <p>安全设置</p>
            </div>
            <div className="gao-logininfo-pwd">
              <p>登录密码</p>
              <a href="111">修改<i className="iconfont icon-jiantou"></i></a>
            </div>
            <div className="gao-logininfo-logout">
              <p>退出登录</p>
            </div>
          </div>
        )
      })
    )
  }
}

export default DetailLoginInfo;
