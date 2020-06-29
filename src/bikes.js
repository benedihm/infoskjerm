import React, { useState, useEffect } from "react";
import createEnturService from "@entur/sdk";

const service = createEnturService({ clientName: "Myrvoll-inforskjerm" });

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);


    useEffect(() => {
        service
        .getBikeRentalStationsByPosition(
            { latitude: 63.428311, longitude: 10.392514 },
            230
            ).then((data) => setBikeStations(data));
    }, []);


    return <div className="BikeStations">
        <h3>Bysykkel</h3>
        {bikeStations.map((stationData) => (
        <Station key={stationData.id} station={stationData} />
        ))}
    </div>
};

const Station = (props) => {
    const { station } = props;
    return <div className="station">
        {station.name} - {station.bikesAvailable} : {station.spacesAvailable}
    </div>
}


export default Bikes;