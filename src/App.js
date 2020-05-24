import React from 'react';
// import Charts from './components/Charts/Charts';
// import Cards from './components/Cards/Cards';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Charts,CountryPicker} from './components';
import styles from './App.module.css';// So while applying classname use styles.className

class App extends React.Component {

  render() {
    return (
      <div className={styles.container}> 
        <Cards />
        <CountryPicker />
        <Charts />

      </div>
    )
  }
}

export default App;
