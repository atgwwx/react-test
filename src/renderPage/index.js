import React from 'react';

import formData from '../util/formData';
import renderSDK from '../util/renderSDK';

function renderPage() {
    return <div>{renderSDK(formData)}</div>
}
export default renderPage;