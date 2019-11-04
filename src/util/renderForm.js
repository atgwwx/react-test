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
        let {submitUrl} = this.props.data;
        console.log(values, submitUrl);
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        let {components, pageName} = this.props.data;
        
        let componentsTpl = components.map(item =>{
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