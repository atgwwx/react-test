import React from 'react';
import { formItemLayout } from '../common/formlayout'
import { Select, Form ,Input, Button} from 'antd';

const componentsMap = {
    "input":Input,
    "select":Select
}
class RenderForm extends React.Component {
    constructor(props) {
        super(props);
    }
    onSave = () => {
        
        let values = this.props.form.getFieldsValue();
        console.log(values);
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        let components = this.props.data.components;
        let xx = components.map(item =>{
            let Component = componentsMap[item.type];
            let attribute = item.attribute;
            let data = attribute.data;
            return <Form.Item label={data.label}>
                {getFieldDecorator(data.name)(
                    <Component {...data}/>
                )}
            </Form.Item>
        })
        return <Form {...formItemLayout}>
            {xx}
            <Form.Item>
                <Button type="primary" onClick={this.onSave}>
                    保存
                </Button>
            </Form.Item>
        </Form>

    }
}
function renderForm(data) {
    let components = data.components;

    return components.map((item, index) => {
        let Component = componentsMap[item.type];
        return <Component attribute={item.attribute} key={index}/>
    });
}

const WrappedForm = Form.create({ name: 'renderForm' })(RenderForm);

export default WrappedForm;