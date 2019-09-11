import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import icon from './images/icon.png';
import art from './images/painting/art.JPG'
import collage from './images/painting/collage.JPG'
import t2 from './images/painting/t2.JPG'
import p from './images/p.JPG';
import al from './images/disney/al.jpg';
import dumbo from './images/disney/dumbo.jpg';
import em from './images/disney/em.JPG';
import fish from './images/disney/fish.JPG';
import ls from './images/disney/ls.JPG';
import mi from './images/disney/mi.JPG';
import d from './images/d.png';
import d2 from './images/d2.png';

function App() {
  return (
    <Grid container style={{ backgroundColor: '#f2f3ff', height: '100%' }}>

      <Grid item xs={4} style={{ padding: '40px 50px 0px 80px', position: 'fixed', flexDirection: 'column', backgroundColor: 'white', height: '100%', width: 400 }}>
        <h2 style={{ fontFamily: 'Helvetica' }}>
          Sarah Varghese
        </h2>
        <Grid container >
          <img src={icon} alt='icon' style={{ height: 200, borderRadius: '30%' }} />
        </Grid>
        <br />
        <h4 style={{ marginBottom: 0 }}> Software Engineer/UI Developer</h4>
        <h5 style={{ marginTop: 0, color: 'gray' }}><i>who also enjoys making art</i></h5>
        <br />
        <h5 style={{ marginTop: 0, color: 'gray' }}>this website is a small collection of the art I've created over the years</h5>
        <br />
        <h5 style={{ marginTop: 0, color: 'gray' }}>Information about my technical work is listed on my <a href="https://www.linkedin.com/in/sarahmvarghese/">LinkedIn</a></h5>
        <br /><br /><br />
        <h5 style={{ marginTop: 0, color: 'gray' }}><i>Technology, like art, is a soaring exercise of the human imagination</i></h5>
      </Grid>

      <Grid item xs={7} style={{ paddingTop: 40, marginLeft: 500, paddingBottom: 200 }}>

        <Grid container>
          <Grid item xs={12}>
            <h2 style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
              paintings
            </h2>
          </Grid>
          <Grid item xs={12}  style={{height: 450}}>
            <img src={t2} alt='t2' style={{height: 400}}/>
          </Grid>
          <Grid item xs={12}  style={{height: 450, paddingLeft: 100}}>
            <img src={collage} alt='collage' style={{height: 400}}/>
          </Grid>
          <Grid item xs={12}  style={{height: 450, paddingLeft: 200}}>
            <img src={art} alt='art' style={{height: 400}}/>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
          <h2 style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
            sketches
          </h2>
          </Grid>
          <Grid item xs={12}  style={{height: 500}}>
            <img src={dumbo} alt='dumbo' style={{height: 400}}/>
          </Grid>
          <Grid item xs={6}  style={{height: 500}}>
            <img src={al} alt='al' style={{height: 400}}/>
          </Grid>
          <Grid item xs={6}  style={{height: 500}}>
            <img src={ls} alt='ls' style={{height: 400}}/>
          </Grid>
          <Grid item xs={6}  style={{height: 500}}>
            <img src={em} alt='em' style={{height: 400}}/>
          </Grid>
          <Grid item xs={6}  style={{height: 500}}>
            <img src={fish} alt='fish' style={{height: 400}}/>
          </Grid>
          <Grid item xs={6}  style={{height: 500}}>
            <img src={mi} alt='mi' style={{height: 400}}/>
          </Grid>
          <Grid item xs={6}  style={{height: 500}}>
            <img src={p} alt='p' style={{height: 400}}/>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <h2 style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
              digital art
            </h2>
          </Grid>
          <Grid item xs={12} style={{paddingBottom: 10}}>
            <img src={d} alt='d' style={{height: 515}}/>
          </Grid>
          <Grid item xs={12}>
            <img src={d2} alt='d2' style={{height: 300}}/>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <h2 style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
              animation
          </h2>
          </Grid>
          <br />
          <Grid item xs={12}>
            <iframe src="https://drive.google.com/file/d/1gOFb1OCTxPAt_ExjwGDK9Apn04Na7lWf/preview" width="560" height="315" title='video'/>
          </Grid>
          <br />
          <Grid item xs={12}>
            <iframe src="https://drive.google.com/file/d/1rYuMrv4buDHLl9b_LNsM9-hzu2O_ZZsk/preview" width="560" height="315" title='video'/>
          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
}

export default App;
