import React, { Component } from 'react';
import './index.scss';
class UpdateUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpVal: "",
    }
  }

  changeUser() {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.state.inpVal) {
      userInfo[0].userName = this.state.inpVal;
      let user = JSON.stringify(userInfo);
      localStorage.setItem("userInfo", user);
    }
    this.props.history.replace("/center");
  }
  inputInfo(e) {
    this.setState({
      inpVal: e.target.value
    })
  }
  render() {
    return (
      <div className="gao-username">
        <div className="gao-username-update">
          <input type="text" placeholder="用户名" onChange={this.inputInfo.bind(this)}>
          </input>
        </div>
        <div className="gao-username-info">
          <p>用户名只能修改一次(5-24个字)</p>
        </div>
        <div className="gao-username-sure" onClick={this.changeUser.bind(this)}>
          <p>确认修改</p>
        </div>
      </div>
    )
  }
}
export default UpdateUsername;
