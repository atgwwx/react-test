import React from 'react';
import { formItemLayout } from '../common/formlayout'
import { Form, Select, Input, Button } from 'antd';
import renderComponent from './renderComponent';

class RenderForm extends React.Component {
    constructor(props) {
        super(props);
    }
    onSave = () => {
        const values = this.props.form.getFieldsValue();
        const { submitUrl } = this.props.data;
        console.log(values, submitUrl);
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { components, pageName } = this.props.data;

        const componentsTpl = components.map((item, index) => {
            const attribute = item.attribute;
            const data = attribute.data;
            return <Form.Item label={data.label} key={index}>
                {getFieldDecorator(data.name)(
                    renderComponent(attribute)
                )}
            </Form.Item>
        })
        return <Form {...formItemLayout}>
            <h3 className="render-page-name">{pageName}</h3>
            {componentsTpl}
            <Form.Item>
                <Button type="primary" onClick={this.onSave}>
                    保存
                </Button>
            </Form.Item>
        </Form>

    }
}


const WrappedForm = Form.create({ name: 'renderForm' })(RenderForm);

export default WrappedForm;