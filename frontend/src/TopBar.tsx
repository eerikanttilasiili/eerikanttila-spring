import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useMovieContext } from './MovieContext';
import { Modal, Paper, TextField, Typography } from '@mui/material';


const TopBar = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const { movies } = useMovieContext();

    return <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }} style={{ cursor: 'pointer', color: 'coral', fontWeight: 'bold' }} onClick={() => { navigate("/"); }}>
                    MovieApp
                </Typography>
                <nav>
                    <div style={{ marginTop: '10px' }}>                        
                        <Button style={{ marginLeft: '5px' }} size="small" variant="outlined" onClick={async () => { navigate("/add"); }}>Add new</Button>
                    </div>
                </nav>
            </Toolbar>
        </AppBar>
    </React.Fragment>
};

export default TopBar;
