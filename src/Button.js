
 import React  from 'react';
 import {useState} from 'react';
 import Table from './Table.js';
 import Dropdown from './Dropdown.js';
 import Chart from './Chart.js';
 import Popper from './Popper.js';
 import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function Button(){
    
    tippy('#myButton', {
        content: "Hello!", 
        placement: 'top',
      });
        const [active, setActive] = useState("table");

        return (
<div className="demo">
    <nav className="demo1 p-3">
  
        <button className ="m-3"onClick={() => setActive ("table")}>Table</button>
        <button className ="m-3"onClick={() => setActive ("dropdown")}>dropDown</button>
        <button className ="m-3"onClick={() => setActive ("chart")}>Chart</button>
        <button id="myButton">Notification</button>
    
        
        
        
    </nav>

    <div>
        {active === "table" && <Table/>}
        {active === "dropdown" && <Dropdown/>}
        {active === "chart" && <Chart/>}
       
    </div>
</div>

        );
           
    }

    export default Button;