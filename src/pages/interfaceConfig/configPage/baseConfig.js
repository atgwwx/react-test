import React from 'react';
import { formItemLayout } from '../../../common/formlayout'

import {
    Form,
    Input,
    Select,
} from 'antd';

const {Option} = Select;

class InputConfig extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (<div className="base-config"><Form {...formItemLayout} >
            <Form.Item label="接口名称">
                {getFieldDecorator('apiName')(
                    <Input />
                )}
            </Form.Item>
            <Form.Item label="接口URL">
                {getFieldDecorator('url')(
                    <Input />
                )}
            </Form.Item>
            <Form.Item label="请求类型">
                {getFieldDecorator('method')(
                    <Select >
                        <Option value="GET" >GET</Option>
                        <Option value="POST" >POST</Option>
                    </Select>)}
            </Form.Item>

        </Form></div>)
    }
}
const WrapperInputConfig = Form.create({ name: 'baseConfig' })(InputConfig);
export default WrapperInputConfig;