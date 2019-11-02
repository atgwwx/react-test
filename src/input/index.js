import React from 'react';

import { Form, Input } from 'antd';
import configData from '../configPage/configData';

class MyInput extends React.Component {
    constructor (props) {
        super(props)
    }
    onClick = () => {
        let {id} = this.props.attribute;
        configData.currentId = id;
        var event = new CustomEvent('setCurrentId', {
            detail: {
                currentId:id
            }
        });
        document.dispatchEvent(event);
    }
    render () {
        return <Form.Item label="文本框">
        <Input {...this.props} onClick={this.onClick}/>
    </Form.Item>
    }
}

export default MyInput;