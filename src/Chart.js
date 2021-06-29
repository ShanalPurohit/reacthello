import { red } from '@material-ui/core/colors';
import React from 'react'
import { Line } from 'react-chartjs-2'

function Linechart()
{
    

    const data={
        labels:['Jan','Feb', 'Mar', 'Apr', 'May'],
        datasets:[
            {
                label:'Sales for 2020 (M)',
                data: [1,4.5,5,1,6],
                backgroundColor:['rgba(255,206,86,0.2)']
            },
            {
                label:'Sales for 2021 (M)',
                data:[2,1,3,2,5,4],
                backgroundColor:['rgba(54,162,235,0.2)']
            }
            

        ]
    }

    const options={
        title:{
            display:true,
            text:'Line Chart'
        },
        scales:{
            yAxes:{
                ticks:{
                    min:0,
                    max:6,
                    stepSize:1
                }
            }
        }
    }


   
    return(
        <div className ="chart">
            <h1>Line Chart</h1>
        <Line  data={data} options={options} />
        </div>
    )
   

    
}

export default Linechart;