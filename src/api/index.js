import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        
        const  {data:{confirmed, recovered, deaths, lastUpdate}}  = await axios.get(url);
        return {confirmed, recovered, deaths, lastUpdate};

    } catch (error) {
        console.log('error');
    }
}

export const fetchDailyData = async () => {
    try {
        
        const  {data}  = await axios.get(`${url}/daily`);
        const modifiedData = data.map((value) => ({
            dailyDeaths : value.deaths.total,
            dailyRecovered : value.totalRecovered,
            dailyInfected : value.totalConfirmed,
            date : value.reportDate
        }))
        return modifiedData;

    } catch (error) {
        console.log('error');
    }
}
