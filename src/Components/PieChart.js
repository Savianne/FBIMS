import '../Stylesheets/PieChart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PIECHART = ({label = 'data label', labels = 'Counter', dataSet = [20], dataColor = '#00BCD4'}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    const [data, setData] = useState({
        labels: labels,
        datasets: [
            {
                label: label,
                data: dataSet,
                backgroundColor: dataColor,
                borderColor: 'white',
                borderWidth: 0.7,
            }
        ]
    })

    return <>
        <div className="chart-container solid-container" style={{
            ...colorscheme.elements.solidContainer
        }}>
            <div className="chart-wraper text-solid" style={{...colorscheme.elements.textSolid}}>
                <Pie data={data} />
            </div>
        </div>
    </>
}

export default PIECHART;
