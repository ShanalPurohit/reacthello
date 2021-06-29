import * as ReactBootstarp from "react-bootstrap";
import {DropdownButton,Dropdown} from 'react-bootstrap'
import React from 'react'


function Dropdowns(){
    return(
<div>
  <h1 className="heading">Select Country</h1>
  
<select>
  <option value="steak">India</option>
  <option value="steak">America</option>
  <option value="steak">Germany</option>
  <option value="steak">south Africa</option>
  <option value="steak">Canada</option>
  <option value="steak">NewZealand</option>
</select>

</div>
   
        
    )
}
export default Dropdowns;