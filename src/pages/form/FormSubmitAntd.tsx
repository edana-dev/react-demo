import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import './FormSubmitAntd.less'

const FormSubmitAntd = () => {
    const layout = {
        labelCol: {span: 6},
        wrapperCol: {span: 12},
    };

    const tailLayout = {
        wrapperCol: {offset: 6, span: 12}
    }

    const onLogin = (values:any) => {
        console.log('Login success: ', values);
    }


    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onLogin}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username！'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>

        </Form>
    )
}

export default FormSubmitAntd