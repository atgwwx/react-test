import React from 'react';

import { Select } from 'antd';
const { Option } = Select;

function MySelect(props) {
    let {options=[]} = props;
    return <div><Select  className="form-item">
       { options.map((item,index) => {
            return <Option value={item.value} key={index}>{item.name}</Option>
        })}
    </Select></div>
}
export default MySelect;