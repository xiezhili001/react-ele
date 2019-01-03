import React, { Component } from 'react';
import './index.scss';
class DetailLoginInfo extends Component {
  render() {
    return (
      <div className="gao-logininfo">
        <div className="gao-logininfo-username">
          <p>用户名</p>
          <p>225565555<i className="iconfont icon-jiantou"></i></p>
        </div>
        <div className="gao-logininfo-count">
          <p>账号绑定</p>
        </div>
        <div className="gao-logininfo-iphone">
          <p><i className="iconfont icon-chongzhi"></i>手机</p>
          <p>151*****1187<i className="iconfont icon-jiantou"></i></p>
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
  }
}

export default DetailLoginInfo;
