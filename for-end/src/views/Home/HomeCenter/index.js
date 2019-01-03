import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class HomeCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:''
    }
  }
  componentDidMount () {
    if (localStorage.getItem("username") === null) {
      this.refs["xxoo"].style.display = "none";
      this.refs["aabb"].style.display = "none";
      this.refs["abab"].style.display = "none";
    }else {
      this.refs["ooxx"].style.display = "none";
      this.refs["bbaa"].style.display = "none";
      this.refs["baba"].style.display = "none";
    }
  }

  render() {
    return (
      <div className="center">
        <div className="profile-1vcJW">
          <section>
            <div className="profile-3g0uv">
              <div className="index-18Ili">
                <span></span>
              </div>
              <div className="profile-xfCcC">
                <p className="profile-1_mtk">
                  <span ref="abab" >44899d5d1</span>
                  <span ref="baba" >登录/注册</span>
                </p>
                <p className="profile-1UP72">
                  <i className="iconfont icon-shouji"></i>
                  <span ref="aabb" >183****0481</span>
                  <span ref="bbaa" >登录后享受更多特权</span>
                </p>
              </div>
              <span className="profile-2XuMq">
                <i className="iconfont icon-xiangyou"></i>
              </span>
            </div>
          </section>
          {/* 这里写未登录时需要引入的组件 */}
          <div data-spm="maininfo" className="index-1G7HV"  ref="ooxx" >
            <div className="index-1ryAh">
              <p>
                <span className="index-2FmrF">
                  <i className="iconfont icon-renminbi2"></i>
                </span>
                {/* <span className="index-2V-Hh">元</span> */}
              </p>
              <p className="index-3S6cZ">钱包</p>
            </div>
            <div className="index-1ryAh">
              <p>
                <span className="index-2FmrF red">
                <i className="iconfont icon-hongbao"></i>
                </span>
                {/* <span className="index-2V-Hh red">个</span> */}
              </p>
              <p className="index-3S6cZ">红包</p>
            </div>
            <div className="index-1ryAh">
              <p>
                <span className="index-2FmrF green">
                <i className="iconfont icon-qian2"></i>
                </span>
                {/* <span className="index-2V-Hh green">个</span> */}
              </p>
              <p className="index-3S6cZ">金币</p>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div data-spm="maininfo" className="index-1G7HV" ref="xxoo" >
            <div className="index-1ryAh">
              <p>
                <span className="index-2FmrF">0.00</span>
                <span className="index-2V-Hh">元</span>
              </p>
              <p className="index-3S6cZ">钱包</p>
            </div>
            <div className="index-1ryAh">
              <p>
                <span className="index-2FmrF red">1</span>
                <span className="index-2V-Hh red">个</span>
              </p>
              <p className="index-3S6cZ">红包</p>
            </div>
            <div className="index-1ryAh">
              <p>
                <span className="index-2FmrF green">0</span>
                <span className="index-2V-Hh green">个</span>
              </p>
              <p className="index-3S6cZ">金币</p>
            </div>
          </div>
          <section className="profile-1reTe">
            <div className="index-2MEEn">
              <div className="index-161Mm">
                <i className="iconfont icon-dizhi address"></i>
              </div>
              <div className="index-yydpu">
                我的地址
                <span className="index-3Z8It">
                  <i className="iconfont icon-xiangyou"></i>
                </span>
              </div>
            </div>
          </section>
          <section className="profile-1reTe">
            <div className="index-2MEEn">
              <div className="index-161Mm">
                <i className="iconfont icon-shangcheng2 glod"></i>
              </div>
              <div className="index-yydpu">
                金币商城
                <span className="index-3Z8It"></span>
              </div>
            </div>
            <div className="index-2MEEn">
            <div className="index-161Mm">
                <i className="iconfont icon-liwulipinjiangpin gift"></i>
              </div>
              <div className="index-yydpu">
                分享拿10元现金
                <span className="index-3Z8It">
                </span>
              </div>
            </div>
          </section>
          <section className="profile-1reTe">
            <div className="index-2MEEn">
              <div className="index-161Mm">
                <i className="iconfont icon-wodekefu address"></i>
              </div>
              <div className="index-yydpu">
            我的客服
                <span className="index-3Z8It"></span>
              </div>
            </div>
            <div className="index-2MEEn">
              <div className="index-161Mm">
                <i className="iconfont icon-changyonglogo40 address"></i>
              </div>
              <div className="index-yydpu">
              下载饿了么APP
                <span className="index-3Z8It"></span>
              </div>
            </div>
          </section>
          <div className="profile-2dyk_">
            <Link to="/rules">规则中心</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeCenter;
