import React from 'react'
import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';



const CategoryList = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      with : "25%",
      render: (img) => {
        const imgUrl = img;
        console.log(imgUrl);
      return <img src={img} alt="category image"/>
    }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      with : "50%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => navigate("/admin/categories/update")} color="success" variant="solid">
          Update
          </Button>
          <Button color="danger" variant="solid">
          Remove
          </Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <div>
      <h2 style={{marginBottom : "5px"}}>Category List</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default CategoryList