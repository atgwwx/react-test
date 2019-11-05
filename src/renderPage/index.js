import React from 'react';
import RenderForm from '../util/renderForm';
import './index.scss';

let configData = localStorage.getItem('configData');
configData = JSON.parse(configData);

function renderPage() {
    return <div className="render-page">
        <div className="form-wrapper">
            <RenderForm data={configData} />
        </div>
    </div>
}
export default renderPage;