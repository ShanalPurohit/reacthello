import React from 'react'
import { Line } from 'react-chartjs-2'

function Linechart()
{
    

    const data={
        labels:['Jan','Feb', 'Mar', 'Apr', 'May'],
        datasets:[
            {
                label:'Sales for 2020 (M)',
                data: [3,4.5,5,3,6],
                backgroundColor:['rgba(255,206,86,0.2)']
            }
        ]
    }


   
    return(
        <div className ="chart">
            <h1>Line Chart</h1>
        <Line  data={data} />
        </div>
    )
   

    
}

export default Linechart;