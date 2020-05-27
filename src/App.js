import React from 'react';
// import Charts from './components/Charts/Charts';
// import Cards from './components/Cards/Cards';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import  'antd/dist/antd.css';
import { Cards, Charts,CountryPicker,Doughnuts} from './components';
import styles from './App.module.css';// So while applying classname use styles.className
import { fetchData } from './api';
import covidimg from './images/COVID-19.png';

class App extends React.Component {

  state = {
    data : {},
    country : ''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData,country});

  }

  render() {
    const {data,country} = this.state;
    return (
      <div className={styles.container}> 
        <img src={covidimg} alt={'COVID-19'} className={styles.image}/>
        <Cards data = {data}/>
        <Doughnuts data = {data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts  data={data} country={country} />
        

      </div>
    )
  }
}

export default App;
