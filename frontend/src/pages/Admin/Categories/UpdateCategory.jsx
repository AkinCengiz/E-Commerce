import React, {useState} from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const UpdateCategory = () => {
  const navigate = useNavigate();
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
                <Button type="primary" onClick={() => navigate("/admin/categories")}>Update Category</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default UpdateCategory