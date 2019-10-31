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
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

class InputConfig extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Form {...formItemLayout}>
            <Form.Item label="placeholder">
                <Input />
            </Form.Item>
            <Form.Item label="name">
                <Input />
            </Form.Item>
        </Form>)
    }
}

export default InputConfig;