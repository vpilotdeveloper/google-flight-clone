import React, { useState } from 'react';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import { searchFlights } from './api';
import './App.css';
import { CircularProgress, Box } from '@mui/material';

const App = () => {
    const [flights, setFlights] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSearch = async (origin, destination, date) => {
        setLoading(true);
        try {
            const originAirport = origin; // Assuming origin is already an airport object
            const destinationAirport = destination; // Assuming destination is already an airport object

            const flightData = await searchFlights(
                originAirport.navigation.relevantFlightParams.skyId,
                destinationAirport.navigation.relevantFlightParams.skyId,
                originAirport.navigation.relevantFlightParams.entityId,
                destinationAirport.navigation.relevantFlightParams.entityId,
                date,
            );

            setFlights(flightData.data || {});
        } catch (error) {
            console.error('Error during flight search:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Flight Finder</h1>
            <FlightSearch onSearch={handleSearch} loading={loading} />
            {loading ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: '100px' }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <FlightResults flights={flights} />
            )}
        </div>
    );
};

export default App;
