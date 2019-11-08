import React from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Form, Input, Collapse } from 'antd';
import formItemLayout from '../../common/formlayout'
import BaseConfig from './baseConfig'

import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

import './index.scss'

const {TextArea} = Input;
const { Panel } = Collapse;

const customPanelStyle = {
    border: 0,
    overflow: 'hidden',
};

class ConfigPage extends React.Component {
    constructor(props) {
        super(props)
    }
    onSave() {

    }
    render() {
        return <div className="config">
            <Collapse defaultActiveKey={['1', '2', '3']} bordered={false}>
                <Panel header="基础配置" key="1" style={customPanelStyle}>
                    <BaseConfig />
                </Panel>
                <Panel header="请求参数配置" key="2" style={customPanelStyle}>
                    <AceEditor
                        mode="json"
                        theme="github"
                        name="UNIQUE_ID_OF_DIV"
                        width="100%"
                        editorProps={{ $blockScrolling: true }}
                    />
                </Panel>
                <Panel header="备注" key="3" style={customPanelStyle}>
                <TextArea rows={4}/>
                </Panel>
                <div className="bottom-wrapper">
                <Button type="primary" onClick={this.onSave} style={{width:'100px'}}>
                    保存
                </Button>
                </div>
            </Collapse>
        </div>
    }
}

export default ConfigPage;