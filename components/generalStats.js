import React from "react";

export default function GeneralStats({stats, isLoading, error}) {
    return <div>
                {error && <p>{error}</p>}
                {isLoading && <p>Loading data from backend....</p>}
                {stats && <React.Fragment>
                                <div className="statBlock">
                                    <h3>总确诊人数:</h3>
                                    <span>{stats.confirmed.value}</span>
                                </div>
                                <div className="statBlock">
                                    <h3>康复:</h3>
                                    <span>{stats.recovered.value}</span>
                                </div>
                                <div className="statBlock">
                                    <h3>死亡:</h3>
                                    <span>{stats.deaths.value}</span>
                                </div>
                          </React.Fragment>}
            </div>;
}