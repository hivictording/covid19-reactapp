import React,{useContext} from 'react';
import useStats from "../utils/useStats";
import {CountryContext} from "../context/context";

export default function CountrySelector() {
    const [{stats : countries, isLoading, error}] = useStats('https://covid19.mathdro.id/api/countries');
    const {country,setCountry} = useContext(CountryContext);

    const change = (e) => {
        setCountry(e.target.value);
    };

    return (
        <div>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading data from backend....</p>}
            {countries && <select onChange={change}>
                            {countries.countries.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                          </select>}
        </div>
    )
}