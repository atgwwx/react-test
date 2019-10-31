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
const { TextArea } = Input;

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
class SelectConfig extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Form {...formItemLayout}>
            <Form.Item label="placeholder">
                <Input />
            </Form.Item>
            <Form.Item label="options">
                <TextArea rows={4}/>
            </Form.Item>
        </Form>)
    }
}

export default SelectConfig;