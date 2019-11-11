


import React, { useState } from 'react';
import { Button, Form, Input, Descriptions, Collapse } from 'antd';
import { formItemLayout } from '../../../common/formlayout'

function SearchForm(props) {
    
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
    const search = () => {
        props.setResult([{ name: "接口" }])
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