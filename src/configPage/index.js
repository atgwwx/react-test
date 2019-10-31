import React from 'react';
import { Button, Menu, Layout } from 'antd';

import Input from '../input';
import Select from '../select';
import './index.scss'
import InputConfig from './inputConfig'
import SelectConfig from './selectConfig'

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const componentMap = {
    'input': Input,
    'select': Select,
    'button': Button
}
const configComponentMap = {
    'input': InputConfig,
    'select': SelectConfig
}
class ConfigPage extends React.Component {
    constructor(props) {
        super(props)
        this.components = []
        this.state = {
            components: [],
            currentType: '',
            configComponent: null,
            currentMenuKey: 'home'
        }
    }
    addComponent = (type) => {
        let component = componentMap[type];
        this.components.push(component);
        this.setState({ components: this.components, currentType: type });
    }
    menuHandleClick = e => {
        console.log('click ', e);
        let key = e.key;
        this.setState({
            currentMenuKey: key,
        });
        if (componentMap[key]) {
            this.addComponent(key);
        }
    };
    render() {
        let { components, currentType, currentMenuKey } = this.state;
        let ConfigComponent = configComponentMap[currentType];
        return <Layout className="config-page">
            <Header>
                <div className="page-title">搭建平台</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onClick={this.menuHandleClick} selectedKeys={[currentMenuKey]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">首页</Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">插入</span>
                        }
                    >
                        <Menu.Item key="input">Input</Menu.Item>
                        <Menu.Item key="select">Select</Menu.Item>
                        <Menu.Item key="textarea">TextArea</Menu.Item>
                        <Menu.Item key="button">Button</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
            <Content>
                <div className="content">
                    <div className="display-panel">
                        <div className="panel-title">新建表单</div>
                        {components.map(Item => <Item />)}
                    </div>
                    <div className="configuration-panel">
                        <div className="panel-title">配置{currentType}</div>
                        {ConfigComponent ? <ConfigComponent /> : null}
                    </div>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Club Factory</Footer>
        </Layout>
         
    }
}


export default ConfigPage;