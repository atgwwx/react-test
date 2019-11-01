import React from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const formItemLayout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
    labelAlign:'left'
  };

class InputConfig extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Form {...formItemLayout}>
            <Form.Item label="标题">
                <Input />
            </Form.Item>
            <Form.Item label="字段名称">
                <Input />
            </Form.Item>
            <Form.Item label="默认值">
                <Input />
            </Form.Item>
            <Form.Item label="占位符">
                <Input />
            </Form.Item>
        </Form>)
    }
}

export default InputConfig;