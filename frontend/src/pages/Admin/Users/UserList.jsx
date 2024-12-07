import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from "antd";
import { useNavigate } from 'react-router-dom';


const UserList = () => {

    const [dataSource,setDataSource] = useState([]);
    const navigate = useNavigate();        
      const columns = [
        {
          title: 'Avatar',
          dataIndex: 'profileImage',
          key: 'profileImage',
          render : (img) => (<img src={img} alt="profile image" style={{borderRadius : "50%", width:"60px", height:"60px"}}/>)
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="small" style={{display:"flex", flexDirection:"column"}}>
              <Button onClick={() => navigate("/admin/user/update")} color="success" variant="solid">
              Update
              </Button>
              <Button color="danger" variant="solid">
              Remove
              </Button>
            </Space>
          ),
        }
      ];
    
    const getUsers = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/users");

            if(response.ok){
                const data = await response.json();
                setDataSource(data);
            }else{
                console.log("Veri getirilirken bir sorun meydana geldi...");
            }
        } catch (error) {
            console.log("Sunucu hatası...")
        }
    }
    useEffect(() => {
        getUsers();
    },[])
  return (
    <Table dataSource={dataSource} columns={columns} rowKey={(item) => item._id}/>
  )
}

export default UserList