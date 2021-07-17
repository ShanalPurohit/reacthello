
 import React  from 'react';
 import {useState} from 'react';
 import Table from './Table.js';
 import Dropdown from './Dropdown.js';
 import Chart from './Chart.js';
 import Apitable from './Apitable.js';
 import Popper from './Popper.js';
 import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import Button from 'react-bootstrap/Button';

function Button1(){
    
    tippy('#myButton', {
        content: "There are four Notifications", 
        placement: 'top',
      });

      tippy('#tabl', {
        content: "Table", 
        placement: 'top',
      });

      tippy('#dropdown', {
        content: "Dropdown", 
        placement: 'top',
      });

      tippy('#chart', {
        content: "Chart", 
        placement: 'top',
      });

        const [active, setActive] = useState("table");

        return (
<div className="demo">
    <nav className="demo1 p-3">
        <Button id="tabl"className ="m-3"onClick={() => setActive ("table")}>Table</Button>
        <Button id="dropdown"className ="m-3"onClick={() => setActive ("dropdown")}>Dropdown</Button>
        <Button id="chart"className ="m-3"onClick={() => setActive ("chart")}>Chart</Button>
        <Button id="myButton">Notification</Button>
      
        
    </nav>

    <div>
        {active === "table" && <Table/>}
        {active === "dropdown" && <Dropdown/>}
        {active === "chart" && <Chart/>}
        
       
    </div>
</div>

        );
           
    }

    export default Button1;