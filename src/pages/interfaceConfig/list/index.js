import React, { useState } from 'react';
import { Button, Divider, Form, Table, Descriptions, Collapse } from 'antd';
import formItemLayout from '../../../common/formlayout'
import SearchForm from './searchForm';
import {
    Link
  } from "react-router-dom";

function List() {
    const columns = [{
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '所属项目',
        dataIndex: 'project',
        key: 'project',
    },
    {
        title: '负责人',
        dataIndex: 'author',
        key: 'author',
    },{
        title:'操作',
        key:'action',
        render:(text, record) =>(
            <span>
                <a><Link to="interfaceConfig">编辑</Link></a>
                <Divider type="vertical"/>
                <a>删除</a>
            </span>
        )
        
    }
]
    const onAdd = () => {

    }
    const [data, setData] = useState([]);
    const setResult = (result) => {
        setData(result)
    }
    return <div className="list">
        <SearchForm setResult={setResult} />
        <div style={{marginTop:'20px'}}>
            <Button type="danger" onClick={onAdd}><Link to="interfaceConfig">新增</Link></Button>
        </div>
        <Table style={{marginTop:'20px'}} dataSource={data} columns={columns} />
    </div>
}
export default List;