import React from 'react';
import { Button,Layout, Form } from 'antd';

import Input from '../input';
import Select from '../select';
import './index.scss'
import InputConfig from './inputConfig'
import SelectConfig from './selectConfig'
import configData from './configData';
import { formItemLayout } from '../common/formlayout'
const uuidv1 = require('uuid/v1');

const { Header, Content, Footer } = Layout;

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
        this.onComponentConfigSubmit();
    }
    addComponent = (type) => {
        let component = componentMap[type];
        let uuid = uuidv1();
        let attribute = {id:uuid, type};
        this.components.push({attribute, component});
        this.setState({ components: this.components, currentType: type });
        configData[uuid] = attribute;
        configData.currentId = uuid;
    }
    onComponentConfigSubmit() {
        document.addEventListener('configSubmit', (e) => {
            let currentId = configData.currentId;
            let attribute = configData[currentId];
            attribute = Object.assign({}, attribute, {data:e.detail});
            configData[currentId] = attribute;
        })
        document.addEventListener('setCurrentId', (e) => {
            let currentId = e.detail.currentId;
            configData.currentId = e.detail.currentId;
            let currentType = configData[currentId].type;
            this.setState({currentType});
        })
    }
    save = () => {

    }
    render() {
        let { components, currentType } = this.state;
        let CurrentConfigComponent = configComponentMap[currentType];
        let currentConfigData = configData[configData.currentId];
        
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
                                {components.map(obj => {
                                    let Component = obj.component;
                                    return <Component attribute={obj.attribute} />
                                })}
                            </Form>
                        </div>
                    </div>
                    <div className="configuration-panel">
                        <div className="panel-title">组件配置：{currentType}</div>
                        {CurrentConfigComponent ? <CurrentConfigComponent attribute={currentConfigData}/> : null}
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Club Factory</Footer>
        </Layout>

    }
}


export default ConfigPage;