import React, {useEffect, useState} from 'react'
import { Button, Form, Input, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategory = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const formLayout ='vertical';
  const params = useParams();
  const categoryId = params.id;

  const getCategoryById = async() => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`);

      if(response.ok){
        const data = await response.json();
        if(data){
          form.setFieldsValue({
            name : data.name,
            image : data.image,
            _id : categoryId
          });
          console.log(form.getFieldsValue);
        }
      }else{
        console.error("Kategori getirilemedi...");
      }
    } catch (error) {
      
    }
  }

  const updateCategory = async(values) => {
    try {
      const response = await fetch("http://localhost:5000/api/categories/",{
        method : "PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(values)
      })

      if(response.ok){
        message.success("Kategori güncellendi...")
        navigate("/admin/categories")
      }else{
        message.error("Güncelleme yapılırken hata meydana geldi...")
      }
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  }

  useEffect(() => {
    getCategoryById();
  },[])

  return (
    <div>
        <Form layout={formLayout} form={form} initialValues={{layout: formLayout}} onFinish={updateCategory}>
          <Form.Item label="Category Name" name="_id" style={{display:"none"}}>
                <Input placeholder="Category Id"  disabled/>
            </Form.Item>
            <Form.Item label="Category Name" name="name">
                <Input placeholder="Category Name"  />
            </Form.Item>
            <Form.Item label="Image Url" name="image">
                <Input placeholder="Image Url" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit'>Update Category</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default UpdateCategory