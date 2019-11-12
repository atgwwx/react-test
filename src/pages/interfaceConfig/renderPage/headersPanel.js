import React from 'react';
import { formItemLayout } from '../../../common/formlayout'

import {
    Form,
    Input,
    Select,
} from 'antd';

const { Option } = Select;

const inputStyle = {
    width:'200px',
    marginRight:'10px'
}
const inputStyleValue = {
    width:'400px',
}
const row = {
    marginTop:'10px'
}
class InputConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:[{name:'Authorization',value:"xxxxx" }]
        }
        this.values = {}
    }
    onChange = (name, e) => {
        this.values[name] = e.target.value;
        console.log(this.values);
    }
    getRow(item, key) {
        return <div style={row} key={key}>
            <Input name={'name'+key} defaultValue={item.name} disabled={true} style={inputStyle} />
            <Input name={'value'+key} defaultValue={item.value} style={inputStyleValue} onChange={(e) => this.onChange('value'+key, e)}/>
        </div>
    }
    getValues() {
        
    }
    render() {
        const {rows} = this.state;
        return (<div className="headers-config">
                {rows.map((item,index) => this.getRow(item, index))}
            </div>)
    }
}
export default InputConfig;