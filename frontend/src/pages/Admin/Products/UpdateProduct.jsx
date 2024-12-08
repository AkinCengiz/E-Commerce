import React, { useEffect, useState} from 'react'
import { Button, Form, Input, Checkbox, Select, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { TextArea } = Input;
  const params = useParams();
  const productId = params.id;
  const formLayout = 'vertical';
  const plainOptions = ['red', 'blue', 'green',"purple","black","white"];  
  const sizeOption = ["XS","SM","M","L","XL","XXL"]
  const [categories, setCategories] = useState([]);
  // const getCategories = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/categories");

  //     if (response.ok) {
  //       const data = await response.json();
  //       setCategories(data);
  //     } else {
  //       console.log("Veri getirme işlemi başarısız...");
  //     }
  //   } catch (error) {
  //     console.log("Sunucu hatası...");
  //   }
  // };
  // const getProduct = async() => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/products/${productId}`)
  //     if(response.ok){
  //       const data = await response.json();
  //       form.setFieldsValue(data)
  //     }else{
  //       message.error("Ürün getirme başarısız...");
  //       return;
  //     }
  //   } catch (error) {
      
  //   }
  // }
  useEffect(() => {
    const data = async() => {
      try {
        const [categoryResponse,productResponse] = await Promise.all([
          fetch("http://localhost:5000/api/categories"),
          fetch(`http://localhost:5000/api/products/${productId}`)
        ]);

        if(!categoryResponse.ok || !productResponse.ok){
          message.error("Veri getirilirken sorun oluştu...");
          return;
        }

        const [categoryData,productData] = await Promise.all([
          categoryResponse.json(),
          productResponse.json()
        ]);
        

        setCategories(categoryData);
        if(productData){
          console.log("Product Data : ",productData)
          form.setFieldsValue({
            name : productData.name,
            price : productData.price,
            discount : productData.discount,
            sizes : productData.sizes,
            colors : productData.colors,
            img : productData.img,
            description : productData.description,
            category : productData.category,
            stockCode : productData.stockCode
          });
        }
        console.log(productData);
        console.log(categoryData)
      } catch (error) {
        console.log("Sunucu hatası...");
      }
    }
    data();
  }, [productId,form]);

  const updateProduct = async(values) => {
    
    const { colors, sizes, ...restValues } = values;
    console.log(colors,sizes);
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`,{
        method:"PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({...restValues,colors,sizes})
      });

      if(response.ok){
        message.success("Ürün başarıyla güncellendi...");
        navigate("/admin/products");
      }else{
        message.error("Ürün güncelleme işlemi başarısız...");
      }
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  }

  return (
    <div>
      <h2>Product Update Panel</h2>
      <Form
        layout={formLayout}
        form={form}
        onFinish={updateProduct}
        initialValues={{ layout: formLayout,colors:["Red"], sizes : ["M"] }}
      >
        <Form.Item label="Product Name" name="name" rules={[{ required: true, message: 'Please enter product name' }]}>
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item label="Image Url" name="img" rules={[{ required: true, message: 'Please enter image url address!' }]}>
          <Input placeholder="Image Url" />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter price!' }]}>
          <Input placeholder="Price" />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter description!' }]}>
        <TextArea rows={4} />
        </Form.Item>        
        <Form.Item label="Colors" name="colors" rules={[{ required: true, message: 'Please select colors!' }]}>
        <Checkbox.Group options={plainOptions} defaultValue={["Green"]} />
        </Form.Item> 
        <Form.Item label="Sizes" name="sizes" rules={[{ required: true, message: 'Please select sizes!' }]}>
        <Checkbox.Group options={sizeOption} defaultValue={["M"]} />
        </Form.Item>  
        <Form.Item label="Stock Code" name="stockCode" rules={[{ required: true, message: 'Please enter stock code!' }]}>
          <Input placeholder="Stock Code" />
        </Form.Item>
        <Form.Item label="Discount" name="discount">
          <Input placeholder="Discount" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please select a category!' }]}
        >
          <Select
            placeholder="Select a Category"
            style={{ width: "100%" }}
          >
            {categories.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ marginTop: "15px" }}>
          <Button type="primary" htmlType='submit'>Update Category</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProduct