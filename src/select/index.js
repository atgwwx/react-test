import React from 'react';

import { Select, Form } from 'antd';
const { Option } = Select;

class MySelect extends React.Component{
    constructor(props) {
        super(props);
    }
    onClick = () => {
        let { id } = this.props.attribute;
        var event = new CustomEvent('setCurrentId', {
            detail: {
                currentId: id
            }
        });
        document.dispatchEvent(event);
    }
    render() {
        let { attribute = {} } = this.props;
        let data = attribute.data || {};
        let { label = '文本框',options=[], placeholder} = data;        
        return <Form.Item label={label} ><Select onClick={this.onClick} placeholder={placeholder}>
            {options.map((item, index) => {
                return <Option value={item.value} key={index}>{item.name}</Option>
            })}
        </Select></Form.Item>
    }
    
}
export default MySelect;