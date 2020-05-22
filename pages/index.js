import React,{useState} from 'react';
import CountrySelector from "../components/countrySelector";
import {CountryContext} from "../context/context";
import Stats from "../components/stats";

export default function IndexPage() {
    const date = new Date();
    const [country,setCountry] = useState('');

    return <React.Fragment>
                <CountryContext.Provider value={{ country,setCountry }}>
                    <h1>新冠病毒实时更新 {date.getFullYear()}年{date.getMonth() + 1}月{date.getDate()}日</h1>
                    <h3>制作: Victor Ding, Mario Ding, Mary Zhu</h3>
                    <CountrySelector />
                    <Stats/>
                </CountryContext.Provider>
           </React.Fragment>;
};