import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import icon from './images/icon.png'

function App() {
  return (
    <Grid container style={{ backgroundColor: '#f2f3ff', height: '100vh' }}>
      <Grid item xs={3} style={{ padding: '20px 0px 0px 30px', position: 'sticky' }}>
        <h2 style={{ fontFamily: 'Helvetica', textAlign: 'center' }}>
          Portfolio <br/> Sarah Varghese
        </h2>
        <Grid container style={{ paddingLeft: '30%' }}>
          <img src={icon} alt='icon' style={{ height: 100, borderRadius: '30%' }} />
        </Grid>
        <br/><br/><br/>
        <h3>
          Hi, 
        </h3>
      </Grid>
      <Grid item xs={9}>
        <Grid container style={{ paddingTop: 20 }}>
          <h2 style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
            animation
          </h2>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
