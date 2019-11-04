import React from 'react';
import { Form } from 'antd';

import formData from '../util/formData';
import renderSDK from '../util/renderSDK';
import RenderForm from '../util/renderForm';

import { formItemLayout } from '../common/formlayout'

import './index.scss';

let configData = localStorage.getItem('configData');
let renderData = {
    components:JSON.parse(configData)
}
function renderPage() {
    return <div className="render-page">
        <div className="form-wrapper">
            <RenderForm data={renderData} />
            {/* <Form {...formItemLayout}>{renderSDK(renderData)}</Form> */}
        </div>
    </div>
}
export default renderPage;