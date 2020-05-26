import React, {useEffect,useState} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar }from 'react-chartjs-2';
import styles from './Charts.module.css';
const Charts = ({data,country}) => {

    const [dailyData, setDailyData] = useState([]);
    useEffect(() =>{
        const fetchAPI = async () => {
            setDailyData( await fetchDailyData());
        }
        fetchAPI();
    },[])

    const barChart = (
        data.confirmed? <Bar 
            
        /> : null
    )

    const lineChart = (
        dailyData.length ? (<Line 
            data = {{
                labels : dailyData.map(({date}) => {
                    const shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;

                    const d = new Date(date);
                    const day = d.getDate();
                    const month = shortMonthName(d);
                    return day + " " + month;
                }),
                datasets: [{
                    data : dailyData.map(({dailyInfected}) => dailyInfected),
                    label : 'Infected',
                    borderColor : '#7F7FFF',
                    fill : true
                },{
                    data : dailyData.map(({dailyDeaths}) => dailyDeaths),
                    label : 'Deaths',
                    borderColor : '#DC3545',
                    fill : true
                }],
            }}
        />) : null
    );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;