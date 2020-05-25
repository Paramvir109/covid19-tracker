import React from 'react';
// import Charts from './components/Charts/Charts';
// import Cards from './components/Cards/Cards';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import  'antd/dist/antd.css';
import { Cards, Charts,CountryPicker} from './components';
import styles from './App.module.css';// So while applying classname use styles.className
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data : {}
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
  }

  render() {
    const data = this.state.data;
    return (
      <div className={styles.container}> 
        <Cards data = {data}/>
        <CountryPicker />
        <Charts />

      </div>
    )
  }
}

export default App;
