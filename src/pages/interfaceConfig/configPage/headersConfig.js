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
            rows:[1]
        }
        this.values = {}
    }
    onChange = (name, e) => {
        this.values[name] = e.target.value;
        console.log(this.values);
    }
    getRow(key) {
        return <div style={row} key={key}>
            <Input name={'name'+key} defaultValue="Authorization" style={inputStyle} onChange={(e) => this.onChange('name'+key, e)}/>
            <Input name={'value'+key} style={inputStyleValue} onChange={(e) => this.onChange('value'+key, e)}/>
        </div>
    }
    getValues() {
        
    }
    render() {
        const {rows} = this.state;
        return (<div className="headers-config">
                {rows.map((el,index) => this.getRow(index))}
            </div>)
    }
}
export default InputConfig;