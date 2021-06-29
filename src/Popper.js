import React  from 'react'
import { createPopper } from '@popperjs/core';
import './App.css';
import './chart.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function Popper(){
    tippy('#myButton', {
        content: "There are 4 Notifications",
        placement: 'top',
      });

    return(
        <div className="area">
          <tippy id="#myButton">
         
            <button id="myButton">Notification</button>
            </tippy>
        </div>
    )
}

export default Popper;