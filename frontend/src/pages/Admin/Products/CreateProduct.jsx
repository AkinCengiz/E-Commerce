import React, { useEffect, useState } from "react";
import { Button, Form, Input, Checkbox, Select, message } from "antd";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const { TextArea } = Input;
  const [categories, setCategories] = useState([]);
  const plainOptions = ["Red", "Blue", "Green"];
  const sizeOption = ["XS", "SM", "M", "L", "XL", "XXL"];


  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories");

      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.log("Veri getirme işlemi başarısız...");
      }
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  };
  const addProduct = async(values) => {
    const { colors, sizes, ...restValues } = values;
    try {
      const response = await fetch("http://localhost:5000/api/products",{
        method:"POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          ...restValues,colors,sizes
        })
      });

      if(response.ok){
        message.success("Ürün başarıyla oluştruldu.");
        navigate("/admin/products");
      }else{
        message.error("Ürün oluşturulurken hata meydana geldi...")
      }
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <h2>Product Update Panel</h2>
      <Form
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout, colors: ["Green"], sizes: ["M"] }}
        onFinish={addProduct}
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item
          label="Image Url"
          name="img"
          rules={[
            { required: true, message: "Please enter image url address!" },
          ]}
        >
          <Input placeholder="Image Url" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter price!" }]}
        >
          <Input placeholder="Price" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter description!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Colors"
          name="colors"
          rules={[{ required: true, message: "Please select colors!" }]}
        >
          <Checkbox.Group options={plainOptions} defaultValue={["Green"]} />
        </Form.Item>
        <Form.Item
          label="Sizes"
          name="sizes"
          rules={[{ required: true, message: "Please select sizes!" }]}
        >
           <Checkbox.Group options={sizeOption} defaultValue={["M"]} />
          
        </Form.Item>
        <Form.Item
          label="Stock Code"
          name="stockCode"
          rules={[{ required: true, message: "Please enter stock code!" }]}
        >
          <Input placeholder="Stock Code" />
        </Form.Item>
        <Form.Item label="Discount" name="discount">
          <Input placeholder="Discount" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select a Category" style={{ width: "100%" }}>
            {categories.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ marginTop: "15px" }}>
          <Button type="primary" htmlType="submit">Create Category</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
