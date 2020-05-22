import React, {useContext, useEffect, useState} from "react";

import useStats from "../utils/useStats";
import {CountryContext} from "../context/context";
import GeneralStats from "./generalStats";

export default function Stats() {
    const {country} = useContext(CountryContext);
    const url = !country ? 'https://covid19.mathdro.id/api' : `https://covid19.mathdro.id/api/countries/${country}`;

    const [{stats,isLoading,error}] = useStats(url);

    return <GeneralStats stats={stats} isLoading={isLoading} error={error}/>;
}