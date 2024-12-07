import React, { useEffect, useState } from "react";
import { Button, message, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories");

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        console.log("Veri getirme işlemi başarısız...");
      }
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  };
  const deleteCategory = async (categoryId) => {
    try {
      //const category = await fetch(`http://localhost:5000/api/categories/${categoryId}`);
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: categoryId }),
      });
      if (response.ok) {
        message.success("Kategori başarıyla silindi...");
        navigate("/admin/categories");
      } else {
        message.error("Kategori silinemedi...");
      }
    } catch (error) {
      console.log("Sunucu hatası...");
    }
  };
  useEffect(() => {
    getCategories();
  }, [dataSource]);
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      with: "25%",
      render: (img, record) => (
        <img src={`/${record.image}`} alt="Product img" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      with: "50%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => navigate(`/admin/categories/update/${record._id}`)}
            color="success"
            variant="solid"
          >
            Update
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => deleteCategory(record._id)}
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: "5px" }}>Category List</h2>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export default CategoryList;
