import React from 'react';
import './index.scss';
import axios from 'axios';
import cook from './cookie';
import cook2 from './cookie2';
import cook3 from './cookie3';
import getCookieValue from './cookie3';
import {Toast} from 'antd-mobile';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone:'',
      code:'',
      codes:'',
      captchaBtnText :"获取验证码"
    };
    this.handleGetInputValue = this.handleGetInputValue.bind(this);
    this.getPhonecode = this.getPhonecode.bind(this);
    this.login = this.login.bind(this);
  }
  handleGetInputValue = (event) => {
    this.setState({
      phone:event.target.value,
    },()=>{
      if(/^1[34578]\d{9}$/.test(this.state.phone)) {
        this.refs['dis'].style.color = "blue";
      }else{
        this.refs['dis'].style.color = "gray";
      }
    })
  }
  handleGetCodeValue = (event) => {
    this.setState({
      code:event.target.value,
    })
  }

  getPhonecode () {
    if(this.state.phone === "18397910481") {
      axios.post('/api/login',{codenum:this.state.code,phone:this.state.phone}).then((res) =>{
        console.log(res.data.body,"短信发送成功!");
        this.refs['dis'].style.color="gray";
        this.setState({
          codes : res.data.body.codes,
        })
        cook('secondsremained',60,60);
        const countdown = getCookieValue('secondsremained') ? getCookieValue('secondsremained') : 0;
        if (countdown !== undefined && countdown > 0) {
          this.settime();
        }
      })
    }

  }
  login () {
    if (this.state.code === this.state.codes && this.state.phone === '18397910481'&&this.state.code!=='') {
      this.props.history.replace('/center');
      localStorage.setItem("username",this.state.phone);
    }else if(this.state.code === ''){
      Toast.info('请输入验证码！');
    }else{
      Toast.info('验证码错误！！');
    }
  }

  settime = () => {
    let countdown = 60;
    countdown = cook3('secondsremained');
    const timer = setInterval(() => {
      if (countdown <= 0) {
        clearInterval(timer);
        this.setState({
          captchaBtnText:'重新获取'
        })
      }else{
        this.setState({
          captchaBtnText:`已发送(${countdown}s)`
        })
        countdown--;
      }
      cook2('secondsremained',countdown,countdown+1);
    },1000);
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
                {/* <InputItem type="phone"  placeholder="186 1234 1234" >手机号码</InputItem> */}
                  <button className="CountButton-3e-kd" ubt-click="101161" onClick={this.getPhonecode} ref="dis" >
                    {this.state.captchaBtnText}
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
