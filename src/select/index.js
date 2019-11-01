import React from 'react';

import { Select, Form } from 'antd';
const { Option } = Select;

function MySelect(props) {
    let { options = [] } = props;
    return <Form.Item label="下拉框"><Select>
        {options.map((item, index) => {
            return <Option value={item.value} key={index}>{item.name}</Option>
        })}
    </Select></Form.Item>
}
export default MySelect;