import React, {useState,useEffect} from 'react';
import styles from './CountryPicker.module.css';
import {Form, Select} from 'antd';
import {fetchCountries} from '../../api'

const {Option} = Select;

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        const fetchAPI = async () => {
            setCountries( await fetchCountries());
        }
        fetchAPI();
    },[setCountries])
    return(
            <Select  showSearch className={styles.select} listHeight={400} defaultValue="" onChange={(value) => handleCountryChange(value)}>
                <Option value="" >Global</Option>
                    {countries.length? countries.map((country,i) =>(<Option key={i} value={country}>{country}</Option>)) : null}
             </Select>
    )
}

export default CountryPicker;