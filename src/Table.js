import * as ReactBootstarp from "react-bootstrap";
import React from 'react'
import MaterialTable from 'material-table'


function Table(){
  const data=[
    {id:'1',name:'Akash',age:22,company:'Google'},
    {id:'2',name:'Mayur',age:32,company:'Facebook'},
    {id:'3',name:'Amar',age:21,company:'Twitter'},
    {id:'4',name:'sohel',age:25,company:'Facebook'},
    {id:'5',name:'Shubham',age:26,company:'TCS'},
    {id:'6',name:'Ashwin',age:31,company:'Amazon'},
    {id:'7',name:'Chetan',age:29,company:'Uber'},
    {id:'8',name:'Ajit',age:22,company:'Zomato'},
  ]

  const columns=[
    {
      title:'Id',field:'id'
    },
{
  title:'Name',field:'name'
},
{
  title:'Age',field:'age'
},
{
  title:'Company',field:'company'
}

  
  ]

    return(
        <div class="tablebg">
<h1 class="heading">Employee Data</h1>
     
     <MaterialTable title="Employee Data"
     data={data}
     columns={columns}
    options={{
      exportButton:true
    }}
     
     />

</div>
    )
}
export default Table;
