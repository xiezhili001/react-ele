import React, { Component } from 'react';
import './index.scss';
class UpdateUsername extends Component {
  render() {
    return (
      <div className="gao-update">
        <div className="gao-update-box">
          <input type="text" placeholder="用户名"></input>
        </div>
        <div className="gao-update-title">
          <p>用户名只能修改一次(5-24个字)</p>
        </div>
        <div className="gao-update-sure">
          <p>确认修改</p>
        </div>
      </div>
    )
  }
}
export default UpdateUsername;
