import * as ReactBootstarp from "react-bootstrap";
import React from 'react'
function Table(){

    return(
        <div>
<h1 class="heading">Employees</h1>
     
     <table class="table">
     <thead class="thead-dark">
   <tr>
     <th>#</th>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Company</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Mark</td>
     <td>Otto</td>
     <td>Google</td>
   </tr>
   <tr>
     <td>2</td>
     <td>Jacob</td>
     <td>Thornton</td>
     <td>Facebook</td>
   </tr>
   <tr>
     <td>3</td>
     <td>Larry </td>
     <td>Bird</td>
     <td>twitter</td>
   </tr>
 </tbody>
</table>
</div>
    )
}
export default Table;
