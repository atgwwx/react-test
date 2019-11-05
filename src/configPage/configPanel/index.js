import React from 'react';
import { Button, Layout, Form, Input, Collapse } from 'antd';
import { formItemLayout } from '../../common/formlayout'

const { Panel } = Collapse;

const customPanelStyle = {
    background: 'rgb(28, 31, 53)',
    border: 0,
    overflow: 'hidden',
};
class ConfigPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    onSave = () => {
        const values = this.props.form.getFieldsValue();
        const event = new CustomEvent('setPageData', {
            detail: values
        });
        document.dispatchEvent(event);
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const ConfigComponent = this.props.configComponent
        const configData = this.props.configData;
        return <div className="configuration-panel">
            <Collapse defaultActiveKey={['2']} bordered={false}>
                <Panel header="全局配置" key="1" style={customPanelStyle}>
                    <Form  {...formItemLayout}>
                        <Form.Item label="页面名称">
                            {getFieldDecorator('pageName')(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="接口地址">
                            {getFieldDecorator('submitUrl')(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.onSave}>
                                保存
                            </Button>
                        </Form.Item>
                    </Form>
                </Panel>
                <Panel header="组件配置" key="2" style={customPanelStyle}>
                    {ConfigComponent ? <ConfigComponent attribute={configData} /> : null}
                </Panel>
            </Collapse>
        </div>
    }
}
const WrapperConfigPanel = Form.create({ name: 'config-panel' })(ConfigPanel);

export default WrapperConfigPanel;