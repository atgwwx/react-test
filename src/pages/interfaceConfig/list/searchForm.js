


import React, { useState } from 'react';
import { Button, Form, Input, Descriptions, Collapse } from 'antd';
import { formItemLayout } from '../../../common/formlayout'

function SearchForm(props) {
    const { getFieldDecorator } = props.form;
    const search = () => {
        //test
        let result = [{ name: "新增商品", project:'商品', author:"小刘"}];
        props.setResult(result);
    }
    return <div className="">
        <Form layout="inline" {...formItemLayout} >
            <Form.Item label="项目">
                {getFieldDecorator('project')(
                    <Input />
                )}
            </Form.Item>
            <Form.Item label="接口">
                {getFieldDecorator('api')(
                    <Input />
                )}
            </Form.Item>
            <Form.Item label="">
                <Button type="primary" onClick={search}>
                    查询
                </Button>
            </Form.Item>
        </Form>
    </div>
}

const WrapperSearchForm = Form.create({ name: 'searchForm' })(SearchForm);

export default WrapperSearchForm;