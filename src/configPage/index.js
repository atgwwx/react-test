import React from 'react';
import { Button,Layout,message} from 'antd';

import InputConfig from './inputConfig'
import SelectConfig from './selectConfig'
import DisplayPanel from './displayPanel'
import ConfigPanel from './configPanel'
import configData from './configData';
import uuidv1 from 'uuid/v1';
import './index.scss'

const { Header, Content, Footer } = Layout;

const configComponentMap = {
    'input': InputConfig,
    'select': SelectConfig
}
class ConfigPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            components: [],
            currentType: '',
        }
        this.initListener();
    }
    addComponent = (type) => {
        const uuid = uuidv1();
        const attribute = {id:uuid, type};
        const components = this.state.components;
        components.push({attribute});
        this.setState({ components: components, currentType: type });
        configData[uuid] = attribute;
        configData.currentId = uuid;
        configData.components.push(uuid);
    }
    initListener() {
        //监听组件配置
        document.addEventListener('setComponentData', (e) => {
            const currentId = configData.currentId;
            const attribute = configData[currentId];
            Object.assign(attribute, {data:e.detail});
            configData[currentId] = attribute;
            this.forceUpdate();
            message.success('保存成功')
        })
        //监听组件切换
        document.addEventListener('setCurrentId', (e) => {
            const currentId = e.detail.currentId;
            configData.currentId = e.detail.currentId;
            const currentType = configData[currentId].type;
            this.setState({currentType});
        })
        //监听全局配置
        document.addEventListener('setPageData', (e) => {
            const detail = e.detail;
            configData.pageName = detail.pageName;
            configData.submitUrl = detail.submitUrl;
            message.success('保存成功')
        })
    }
    /**
     * 保存页面整体数据（全局配置&组件配置）
     */
    save = () => {
        const components = configData.components.map(id => {
            const obj = configData[id];
            if (obj.data) {
                return {
                    type: obj.type,
                    attribute:obj
                }
            } else {
                return null;
            }
        });
        //过滤掉没有配置的组件
        components = components.filter(obj => obj);
        //TODO, 临时保存在本地
        const newConfigData = {
            pageName:configData.pageName,
            submitUrl:configData.submitUrl,
            components
        }
        localStorage.setItem('configData', JSON.stringify(newConfigData));
        message.success('保存成功')
    }
    render() {
        const { components, currentType } = this.state;
        const currentConfigComponent = configComponentMap[currentType];
        const currentConfigData = configData[configData.currentId];
        
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
                    <DisplayPanel components={components}/>
                    <ConfigPanel configComponent={currentConfigComponent} configData={currentConfigData}/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Club Factory</Footer>
        </Layout>
    }
}

export default ConfigPage;