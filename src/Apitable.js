import './App.css';
import * as ReactBootstarp from "react-bootstrap";
import React from 'react'
import {useEffect,useState} from 'react'
import table from 'react-table'

function Api(){
    const [data,setData]=useState([])
 useEffect(()=>{
   fetch("https://djangoapi22.herokuapp.com/employees/").then((result)=>{
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
  <td>First Name</td>
  <td>Last Name</td>
  <td>Emp_id</td>
</tr>

{
data.map((item)=>
<tr>
<td>{item.id}</td>
<td>{item.firstname}</td>
<td>{item.lastname}</td>
<td>{item.emp_id}</td>

</tr>
)

}
</table>
</div>
    )

}

export default Api;