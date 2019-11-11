import React from 'react';
import { Button, Layout,Menu,Icon,Breadcrumb, Form, Input, Collapse } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class ConfigPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Layout>
            <Header className="header">
                <div className="title" >测试工具平台</div>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultOpenKeys={['sub2']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    商品
                                </span>
                            }
                        >
                            <Menu.Item key="1"><Link to="interfaceRender">商品上货</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="user" />
                                    配置
                                </span>
                            }
                        >
                            <Menu.Item key="11"><Link to="interfaceConfig">interface配置</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                      {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    }
}

export default ConfigPage;