import React from 'react';
import { Button, Descriptions, Collapse} from 'antd';
import HeadersPanel from './headersPanel';

import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const { Panel } = Collapse;

const customPanelStyle = {
    border: 0,
    overflow: 'hidden',
};
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorData: JSON.stringify({
                "name": "zhangsan",
                "age": "23"
            })
        }
    }
    onSave = () => {
        let obj = {
            requestParams: this.state.editorData,
        }
        console.log(obj)
    }
    onAceEditorChange = (value) => {
        this.setState({ editorData: value })
    }
    render() {
        const { editorData } = this.state;

        return <div className="render">
            <div style={{float:'right'}}>                    <Button type="primary" onClick={this.onSave} style={{ width: '100px' }}>
                        运行
                </Button></div>
            <Collapse defaultActiveKey={['1', '2', '3']} bordered={false}>
                <Panel header="基本信息" key="1" style={customPanelStyle}>
                    <Descriptions title="">
                        <Descriptions.Item label="接口名称">创建商品，包括Seller和自营</Descriptions.Item>
                        <Descriptions.Item label="请求类型">POST</Descriptions.Item>
                        <Descriptions.Item label="请求URL">/wms/createItem/</Descriptions.Item>
                    </Descriptions>
                </Panel>
                <Panel header="Headers" key="2" style={customPanelStyle}>
                    <HeadersPanel />
                </Panel>
                <Panel header="请求参数" key="3" style={customPanelStyle}>
                    <AceEditor
                        mode="json"
                        theme="github"
                        name="UNIQUE_ID_OF_DIV"
                        onChange={this.onAceEditorChange}
                        value={editorData}
                        fontSize="20px"
                        width="100%"
                        height="300px"
                        editorProps={{ $blockScrolling: true }}
                    />
                </Panel>
                <Panel header="备注" key="4" style={customPanelStyle}>
                    <div></div>
                </Panel>
                <Panel header="结果" key="5" style={customPanelStyle}>
                    <div></div>
                </Panel>
                
            </Collapse>
        </div>
    }
}

export default Home;