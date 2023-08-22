import axios from 'axios';

const url = 'https://corona.lmao.ninja/v3/covid-19';

export const fetchData = async (country) => {
    let changeableurl = url;
    if(country){
        changeableurl = `${url}/countries/${country}`;
    }
    else{
        changeableurl = `${url}/all`;

    }
    try {
        
        const {data:{cases, recovered, deaths, updated}} = await axios.get(changeableurl);
        return {confirmed:cases, recovered, deaths, lastUpdate:updated};

    } catch (error) {
        console.log('error' + error);
    }
}

export const fetchDailyData = async () => {
    try {
        
        const  {data}  = await axios.get(`${url}/historical/all`);
        const dailyDataArray = [];
        for (const date in data.cases) {
            const dailyDeaths = data.deaths[date];
            const recovered = data.recovered[date];
            const dailyInfected = data.cases[date];
            
            dailyDataArray.push({
                dailyDeaths,
                recovered,
                dailyInfected,
                date
            });
        }
        console.log(dailyDataArray)
        return dailyDataArray;

    } catch (error) {
        console.log('error' + error);
    }
}

export const fetchCountries = async () => {
    try {
        
        const  {data}  = await axios.get(`${url}/countries`);
        const modifiedData = data.map((value) => value.country)
        return modifiedData;

    } catch (error) {
        console.log('error' + error);
    }
}
