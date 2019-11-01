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
        sm: { span: 5},
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
    labelAlign:'left'
};
class SelectConfig extends React.Component {
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
            <Form.Item label="占位符">
                <Input />
            </Form.Item>
            <Form.Item label="选项" className="xx">
                <TextArea rows={4}/>
            </Form.Item>
        </Form>)
    }
}

export default SelectConfig;