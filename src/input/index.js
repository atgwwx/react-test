import React from 'react';

import { Form, Input } from 'antd';
import configData from '../configPage/configData';

class MyInput extends React.Component {
    constructor(props) {
        super(props)
    }
    onClick = () => {
        let { id } = this.props.attribute;
        configData.currentId = id;
        var event = new CustomEvent('setCurrentId', {
            detail: {
                currentId: id
            }
        });
        document.dispatchEvent(event);
    }
    render() {
        console.log('input-render', this.props.attribute)
        let { attribute = {} } = this.props;
        let data = attribute.data || {};
        let { label = '文本框' } = data;
        return <Form.Item label={label}>
            <Input {...data} onClick={this.onClick} />
        </Form.Item>
    }
}

export default MyInput;