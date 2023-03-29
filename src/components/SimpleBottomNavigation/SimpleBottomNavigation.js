import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{ background: 'var(--content-header)', position: 'fixed', bottom: '0', width: '100%' }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{ color: 'var(--color-white)' }} />
                <BottomNavigationAction label="Movies" icon={<TheatersIcon />} style={{ color: 'var(--color-white)' }} />
                <BottomNavigationAction label="TV Series" icon={<TvIcon />} style={{ color: 'var(--color-white)' }} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{ color: 'var(--color-white)' }} />
            </BottomNavigation>
        </Box>
    );
}