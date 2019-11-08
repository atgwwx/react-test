import React from 'react';
import { Button, Layout,Menu,Icon,Breadcrumb, Form, Input, Collapse } from 'antd';
import InterfaceConfig from '../interfaceConfig/configPage'
import './index.scss'

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
                        defaultSelectedKeys={['11']}
                        defaultOpenKeys={['sub2']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    PMS
              </span>
                            }
                        >
                            <Menu.Item key="1">功能1</Menu.Item>
                            <Menu.Item key="2">功能2</Menu.Item>
                            <Menu.Item key="3">功能3</Menu.Item>
                            <Menu.Item key="4">功能4</Menu.Item>
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
                            <Menu.Item key="11">interface配置</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>配置</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <InterfaceConfig />
        </Content>
                </Layout>
            </Layout>
        </Layout>
    }
}

export default ConfigPage;