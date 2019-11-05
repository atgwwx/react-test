import React from 'react';
import { formItemLayout } from '../../common/formlayout'
import { Form } from 'antd';
import renderComponent from '../../util/renderComponent'

class DisplayPanel extends React.Component {
    constructor(props) {
        super(props)
    }
    onClick = (id) => {
        const event = new CustomEvent('setCurrentId', {
            detail: {
                currentId: id
            }
        });
        document.dispatchEvent(event);
    }
    render() {
        const components = this.props.components;

        return <div className="display-panel">
            <div className="panel-title">预览区域</div>
            <div className="form-wrapper">
                <Form {...formItemLayout}>
                    {components.map((obj, index) => {
                        const attribute = obj.attribute;
                        const { id, data = {} } = attribute;
                        const { label = '标题' } = data;
                        return <Form.Item label={label} key={index}>
                            <div onClick={() => this.onClick(id)}>
                                {renderComponent(attribute)}
                            </div>
                        </Form.Item>
                    })}
                </Form>
            </div>
        </div>
    }
}

export default DisplayPanel;