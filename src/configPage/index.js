import React from 'react';
import { Button, Menu, Layout, Form } from 'antd';

import Input from '../input';
import Select from '../select';
import './index.scss'
import InputConfig from './inputConfig'
import SelectConfig from './selectConfig'
import { formItemLayout } from '../common/layout'
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
    save = () => {

    }
    render() {
        let { components, currentType, currentMenuKey } = this.state;
        let ConfigComponent = configComponentMap[currentType];
        return <Layout className="config-page">
            <Header className="header">
                <div className="page-title">表单搭建平台</div>
                <div className="right-content">
                    <Button type="danger" onClick={this.save} >保存</Button>
                </div>
            </Header>
            <Content>
                <div className="content">
                    <div className="components-panel">
                        <div className="panel-title">组件</div>
                        <div className="components">
                            <Button type="primary" onClick={() => { this.addComponent('input') }} className="component-item">Input</Button>
                            <Button type="primary" onClick={() => { this.addComponent('select') }} className="component-item">Select</Button>
                            <Button type="primary" className="component-item">TextArea</Button>

                        </div>
                    </div>
                    <div className="display-panel">
                        <div className="panel-title">预览区域</div>
                        <div className="form-wrapper">
                            <Form {...formItemLayout}>
                                {components.map(Item => <Item />)}
                            </Form>
                        </div>
                    </div>
                    <div className="configuration-panel">
                        <div className="panel-title">组件配置：{currentType}</div>
                        {ConfigComponent ? <ConfigComponent /> : null}
                    </div>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Club Factory</Footer>
        </Layout>

    }
}


export default ConfigPage;