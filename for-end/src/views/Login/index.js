import React from 'react';
import './index.scss';
import axios from 'axios';




class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone:'',
      code:'',
      codes:''
    };
    this.getPhonecode = this.getPhonecode.bind(this);
    this.login = this.login.bind(this);
  }
  handleGetInputValue = (event) => {
    this.setState({
      phone:event.target.value,
    })
  }
  handleGetCodeValue = (event) => {
    this.setState({
      code:event.target.value,
    })
  }

  getPhonecode () {
    axios.post('/api/login',{codenum:this.state.code,phone:this.state.phone}).then((res) =>{
      console.log(res.data.body);
      this.setState({
        codes : res.data.body.codes,
      })
      // console.log(this.state.code);
    })
  }
  login () {
    // console.log(this.state);
    if (this.state.code === this.state.codes) {
      // console.log("登录成功")
      this.props.history.replace('/center');
    }
  }

  render() {
    return (
      <div className="login">
        <div className="App-1EAON">
          <div className="App-3Q8Qb">
            <div className="LoginHeader-1jXn6">
              <div className="img">
                <img src={require('./img/login-logo.jpg')} alt="" />
              </div>
            </div>
            <div>
              <form className="MessageLogin-iYvWA">
                <section className="MessageLogin-FsPlX">
                  <input type="tel" placeholder="手机号" value={this.state.phone} onChange={this.handleGetInputValue} />
                  <button className="CountButton-3e-kd" ubt-click="101161" onClick={this.getPhonecode}>
                    获取验证码
                    </button>
                </section>
                <section className="MessageLogin-FsPlX">
                  <input type="tel" placeholder="验证码" value={this.state.code} onChange={this.handleGetCodeValue} />
                </section>
                <div id="_umfp" ></div>
                <div id="slideVerify" className="nc-container"></div>
                <section className="MessageLogin-15xD9">
                  新用户登录即自动注册，并表示已同意
                  <a href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18">《用户服务协议》</a>
                </section>
                <button className="SubmitButton-2wG4T" onClick={this.login}>
                  登录
                </button>
              </form>
              <div className="MessageLogin-31EIr">关于我们</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Login;
