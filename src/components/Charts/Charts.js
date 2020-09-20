import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, [])

    const barChart = (
        confirmed ? <Bar
            data={
                {
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(127,127,255,0.7)', 'rgba(76,207,118,0.7)', 'rgba(220,53,69,0.7)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }
                    ]
                }
            }
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'No of people',
                            fontSize: 15
                        }
                    }]
                }

            }}
            height={1}
            width={2.6}

        /> : null
    )

    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({ date }) => {
                    const shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;

                    const d = new Date(date);
                    const day = d.getDate();
                    const month = shortMonthName(d);
                    return day + " " + month;
                }),
                datasets: [{
                    data: dailyData.map(({ dailyInfected }) => dailyInfected),
                    label: 'Infected',
                    borderColor: '#7F7FFF',
                    fill: true
                }, {
                    data: dailyData.map(({ dailyDeaths }) => dailyDeaths),
                    label: 'Deaths',
                    borderColor: '#DC3545',
                    fill: true
                }],
            }}
        />) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;