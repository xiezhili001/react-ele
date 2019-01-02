import React from 'react';
import './index.scss';
import { SwipeAction,  Accordion, List } from 'antd-mobile';

class Rules extends React.Component {
  render() {
    return (
      <div className="app-1w6Q3_2">
        <List>
          <SwipeAction>
            <List.Item>
             营业资质
      </List.Item>
          </SwipeAction>
          <SwipeAction>
            <List.Item>
              服务承诺
      </List.Item>
          </SwipeAction>
          <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="饿了么平台规则">
            <List className="my-list">
              <List.Item>商户协议</List.Item>
              <List.Item>用户协议</List.Item>
              <List.Item>平台公告</List.Item>
              <List.Item>售后规则</List.Item>
            </List>
          </Accordion.Panel>
           </Accordion>
           <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="餐饮中心规则">
            <List className="my-list">
              <List.Item>基础规则</List.Item>
              <List.Item>商户准入规则</List.Item>
              <List.Item>商品管理规则</List.Item>
              <List.Item>店铺运营管理规则</List.Item>
              <List.Item>配送规则</List.Item>
            </List>
          </Accordion.Panel>
           </Accordion>
           <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="非餐厅中心规则">
            <List className="my-list">
              <List.Item>基础规则</List.Item>
              <List.Item>平台项目商户入驻规则</List.Item>
              <List.Item>平台项目商户运营管理规则</List.Item>
              <List.Item>自营项目供应商准入审核规则</List.Item>
              <List.Item>自营项目供应商运营管理规则</List.Item>
              <List.Item>联营便利店管理规则</List.Item>
              <List.Item>商品管理规则</List.Item>
              <List.Item>物流仓储服务规则</List.Item>
            </List>
          </Accordion.Panel>
           </Accordion>
           <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="政府信息公示">
            <List className="my-list">
              <List.Item>法规</List.Item>
              <List.Item>标准</List.Item>
              <List.Item>公告</List.Item>
            </List>
          </Accordion.Panel>
           </Accordion>
        </List>

      </div>
    )
  }
}
export default Rules;
