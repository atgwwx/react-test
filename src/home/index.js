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
        return <div>欢迎进入测试工具平台！</div>
    }
}

export default ConfigPage;