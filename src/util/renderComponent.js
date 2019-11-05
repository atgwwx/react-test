import React from 'react';
import { Select, Input } from 'antd';

const { Option } = Select;

function renderComponent(attribute) {
    const { data = {}, type } = attribute;
    if (type === 'input') {
        return <Input {...data} />
    } else if (type === 'select') {
        let { options = [] } = data;
        if (typeof options === 'string') {
            //options在配置页面保存为jsonstring,需要parse一下，转为array
            options = JSON.parse(options)
        }
        return <Select {...data}>
            {options.map((item, index) => {
                return <Option value={item.value} key={index}>{item.name}</Option>
            })}
        </Select>
    }
}

export default renderComponent;