import React, { useEffect, useState } from 'react'
import { Table } from "antd"

const UserList = () => {
    const [dataSource,setDataSource] = useState([]);
          
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