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
import {formItemLayout} from '../../common/formlayout'
const { TextArea } = Input;

class SelectConfig extends React.Component {
    constructor(props) {
        super(props)
    }
    onSave = () => {
        let values = this.props.form.getFieldsValue();
        values.options = JSON.parse(values.options);
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

        return (<Form {...formItemLayout}>
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
            <Form.Item label="选项">
                {getFieldDecorator('options')(
                <TextArea rows={4}/>
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
const WrapperSelectConfig = Form.create({ name: 'selectConfig' })(SelectConfig);

export default WrapperSelectConfig;