import React from 'react';
import { formItemLayout } from '../../common/formlayout'
import configData from '../configData'
import CustomEvent from 'custom-event'

import {
    Form,
    Input,
    Button
} from 'antd';

class InputConfig extends React.Component {
    constructor(props) {
        super(props);
    }
    onSave = () => {
        const values = this.props.form.getFieldsValue();
        var event = new CustomEvent('setComponentData', {
            detail: values
        });
        document.dispatchEvent(event);
    }
    componentDidMount(){
        this.setValues();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.attribute.id !== this.props.attribute.id) {
            this.setValues();
        }
    }
    setValues() {
        const {attribute={}} = this.props;
        const data = attribute.data;
        const { setFieldsValue,resetFields } = this.props.form;

        if (data) {
            setFieldsValue(data);
        } else {
            resetFields();
        }
       
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        
        return (<Form {...formItemLayout} >
            <Form.Item label="标题">
                {getFieldDecorator('label')(
                    <Input />
                )}
            </Form.Item>
            <Form.Item label="字段名称">
                {getFieldDecorator('name')(
                    <Input />
                )}            
            </Form.Item>
            <Form.Item label="占位符">
                {getFieldDecorator('placeholder')(
                    <Input />
                )}            
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={this.onSave}>
                    保存
                </Button>
            </Form.Item>
        </Form>)
    }
}
const WrapperInputConfig = Form.create({ name: 'inputConfig' })(InputConfig);
export default WrapperInputConfig;