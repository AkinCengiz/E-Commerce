import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import {useNavigate} from "react-router-dom"

const CreateCategory = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const formLayout = "vertical";

  const handleCreateCategory = async(values) => {
    try {
      const response = await fetch("http://localhost:5000/api/categories",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(values)
      });
      if(response.ok){
        console.log("Kategori başarıyla kaydedildi.");
        navigate("/admin/categories");
      }else{
        console.log("Kategori oluşturulurken hata meydana geldi..")
      }
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  }

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onFinish={handleCreateCategory}
    >
      <Form.Item label="Category Name" name="name">
        <Input placeholder="Category Name" />
      </Form.Item>
      <Form.Item label="Image Url" name="image">
        <Input placeholder="Image Url"/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create Category</Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCategory;
