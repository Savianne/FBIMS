import './Baptism_piechart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BAPTISM_PIECHART = ({label = 'Counter', total, count, color = '#00BCD4'}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    const data = {
        labels: ['Batized', 'Not Baptized'],
        datasets: [
          {
            label: 'No. Of Baptized and Not Baptized',
            data: [389, 269],
            backgroundColor: [
              'rgb(55 226 46)',
              'rgb(0 208 135)',
            ],
            color: 'white',
            borderColor: 'white',
            borderWidth: 0.7,
          },
        ],
      };

    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'No. Of Baptized and Not Baptized'
            }
        }
    }

    return <>
        <div className="chart-container solid-container" style={{
            ...colorscheme.elements.solidContainer
        }}>
            <div className="chart-wraper text-solid" style={{...colorscheme.elements.textSolid}}>
                <Pie data={data} options={options}/>
            </div>
        </div>
    </>
}

export default BAPTISM_PIECHART;
