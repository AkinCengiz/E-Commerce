import React, {useState} from 'react'
import { Button, Form, Input } from 'antd';

const CreateCategory = () => {
    const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <div>
        <Form layout={formLayout} form={form} initialValues={{layout: formLayout}}>
            <Form.Item label="Category Name">
                <Input placeholder="Category Name" />
            </Form.Item>
            <Form.Item label="Image Url">
                <Input placeholder="Image Url" />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Create Category</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateCategory