import React, { useState} from 'react'
import { Button, Form, Input, Checkbox, Select } from 'antd';

const UpdateProduct = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const { TextArea } = Input;
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  }
  const plainOptions = ['Red', 'Blue', 'Green'];
  
  const sizeOption = ["XS","SM","M","L","XL","XXL"]

  return (
    <div>
      <h2>Product Update Panel</h2>
      <Form layout={formLayout} form={form} initialValues={{layout: formLayout}}>
          <Form.Item label="Product Name">
              <Input placeholder="Product Name" />
          </Form.Item>
          <Form.Item label="Image Url">
              <Input placeholder="Image Url" />
          </Form.Item>
          <Form.Item label="Price">
              <Input placeholder="Price" />
          </Form.Item>
          <TextArea rows={4} />
          <h4>Colors</h4>
          <Checkbox.Group options={plainOptions} defaultValue={['Green']} />
          <h4>Sizes</h4>
          <Checkbox.Group options={sizeOption} defaultValue={['M']} />
          <Form.Item label="Stock Code">
              <Input placeholder="Stock Code" />
          </Form.Item>
          <Form.Item label="Discount">
              <Input placeholder="Discount" />
          </Form.Item>
          <Select
      defaultValue="lucy"
      style={{
        width: "100%"
      }}
        options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
      <Form.Item style={{marginTop : "15px"}}>
              <Button type="primary">Update Category</Button>
          </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProduct