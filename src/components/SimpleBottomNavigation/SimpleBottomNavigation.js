import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) navigate("/");
        else if (value === 1) navigate("/movies");
        else if (value === 2) navigate("/series");
        else if (value === 3) navigate("/search");
    }, [value, navigate]);

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                style={{ background: 'var(--content-header)', position: 'fixed', bottom: '0', width: '100%' }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{ color: 'var(--color-white)' }} />
                <BottomNavigationAction label="Movies" icon={<TheatersIcon />} style={{ color: 'var(--color-white)' }} />
                <BottomNavigationAction label="TV Series" icon={<TvIcon />} style={{ color: 'var(--color-white)' }} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{ color: 'var(--color-white)' }} />
            </BottomNavigation>
        </Box >
    );
}