import React from 'react';
import Input from '../input';
import Select from '../select';

const componentsMap = {
    "input":Input,
    "select":Select
}
function sdk(data) {
    let components = data.components;
    return components.map((item, index) => {
        let Component = componentsMap[item.type];
        return <Component attribute={item.attribute} key={index}/>
    });
}
export default sdk;