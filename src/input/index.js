import React from 'react';

import { Input } from 'antd';

function MyInput(props) {
    return <div><Input {...props} className="form-item"/></div>
}
export default MyInput;