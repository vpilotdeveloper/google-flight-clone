import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Autocomplete,
    TextField,
    Button,
    Grid,
    CircularProgress,
} from '@mui/material';
import { searchAirports } from '../api';

const FlightSearch = ({ onSearch, loading }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [originOptions, setOriginOptions] = useState([]);
    const [destinationOptions, setDestinationOptions] = useState([]);

    // Function to fetch airport options as the user types
    const handleOriginInputChange = async (event, value) => {
        setOrigin(value);
        if (value.length >= 3) {
            const airports = await searchAirports(value);
            setOriginOptions(
                airports.map((airport) => ({
                    label: airport.presentation.suggestionTitle,
                    value: airport,
                })),
            );
        }
    };

    const handleDestinationInputChange = async (event, value) => {
        setDestination(value);
        if (value.length >= 3) {
            const airports = await searchAirports(value);
            setDestinationOptions(
                airports.map((airport) => ({
                    label: airport.presentation.suggestionTitle,
                    value: airport,
                })),
            );
        }
    };

    // Handle form submission
    const handleSubmit = () => {
        if (origin && destination && date) {
            onSearch(origin.value, destination.value, date);
        }
    };

    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ marginBottom: '20px', padding: '20px' }}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                    options={originOptions}
                    getOptionLabel={(option) => option.label}
                    onInputChange={handleOriginInputChange}
                    onChange={(event, value) => setOrigin(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Origin"
                            variant="outlined"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                    options={destinationOptions}
                    getOptionLabel={(option) => option.label}
                    onInputChange={handleDestinationInputChange}
                    onChange={(event, value) => setDestination(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Destination"
                            variant="outlined"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <TextField
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={!origin || !destination || !date || loading}
                >
                    {loading ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        'Search'
                    )}
                </Button>
            </Grid>
        </Grid>
    );
};

FlightSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default FlightSearch;
