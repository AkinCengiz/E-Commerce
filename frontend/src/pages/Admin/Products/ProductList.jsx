import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from "antd";
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const [categoryResponse,productResponse] = await Promise.all(
        [fetch("http://localhost:5000/api/categories"),fetch("http://localhost:5000/api/products")]
      );
      if(!categoryResponse.ok || !productResponse.ok){
        console.log("Veri getirilirken bir hata meydana geldi.");
        
      }else{
        const [categories,products] = await Promise.all([
          categoryResponse.json(),
          productResponse.json()
        ]);
        const productList = products.map(product => {
          const categoryId = product.category;
          const category  = categories.find(item => item._id === categoryId);

          return {...product,categoryName : category ? category.name : ""}
        });
        setDataSource(productList);
      }
        
      
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  }
  useEffect(()=>{
    
    getProducts();
  },[]);
  
  
  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render : (img,record) => (<img src={`/${record.img[0]}`} alt="Product img" style={{width:"50px"}}/>)
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Colors',
      dataIndex: 'colors',
      key: 'colors',
      render: (colors) => (
        <div style={{display : "flex", flexWrap:"wrap"}}>
          {colors.map((item, index) => (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: item,
                borderRadius: "50%",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            ></div>
          ))}
        </div>
      ),
    },
    {
      title: 'Sizes',
      dataIndex: 'sizes',
      key: 'sizes',
      render: (sizes) => (
        <div>
          {sizes.map((item, index) => (
            <p style={{textAlign:"center"}} key={index}>{item}</p>
          ))}
        </div>
      ),
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small" style={{display:"flex", flexDirection:"column"}}>
          <Button onClick={() => navigate("/admin/products/update")} color="success" variant="solid">
          Update
          </Button>
          <Button color="danger" variant="solid">
          Remove
          </Button>
        </Space>
      ),
    }
  ];
  return (    
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default ProductList