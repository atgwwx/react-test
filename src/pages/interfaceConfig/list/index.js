import React, { useState } from 'react';
import { Button, Form,Table, Descriptions, Collapse} from 'antd';
import formItemLayout from '../../../common/formlayout'
import SearchForm from './searchForm';

function List () {
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
      },]
    
    const [data, setData] = useState([]);
    const setResult = (result) => {
        setData(result)
    }
    return <div className="list">
    <SearchForm setResult={setResult}/>
<Table dataSource={data} columns={columns} />

</div>
}


export default List;