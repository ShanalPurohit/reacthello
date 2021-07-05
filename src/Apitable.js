import './App.css';
import * as ReactBootstarp from "react-bootstrap";
import React from 'react'
import {useEffect,useState} from 'react'
import table from 'react-table'

function Api(){
    const [data,setData]=useState([])
 useEffect(()=>{
   fetch("https://raw.githubusercontent.com/ShanalPurohit/reacthello/main/src/user.json").then((result)=>{
     result.json().then((resp)=>{
       setData(resp)
     })
   })
 },[])

    return(
        <div class="tablebg">
<h1 class="heading">Users</h1>
     
     <table class="apitable" border="5">

<tr>
  <td>Id</td>
  <td>Name</td>
  <td>Email</td>
</tr>

{
data.map((item)=>
<tr>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.email}</td>
</tr>
)

}
</table>
</div>
    )

}

export default Api;