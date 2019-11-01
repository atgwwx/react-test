import React from 'react';

import { Form, Input } from 'antd';

function MyInput(props) {
    return <Form.Item label="文本框">
            <Input {...props}/>
        </Form.Item>
}
export default MyInput;