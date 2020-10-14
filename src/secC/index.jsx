import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import arrow from './../assets/Groupe-2512.svg'
import uber from './../assets/uber-2.svg'
//import './index.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backdropFilter: 'blur(30px)',
    backgroundColor: '#eef4fe',
    margin:'30px 0 0 0'
  },
  paper: {
    width: '264px',
    height: '253px',
    borderRadius: '6px',
    boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.16)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    padding:'10px',
    margin:'10px'
  },
  dpub:{
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap'
  },
  pub:{
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: 900,
    lineHeight: 1.14,
    textAlign: 'left',
    color: '#5594fe',
  },
  work:{
    fontFamily: 'Work Sans',
    fontSize: '42px',
    fontWeight: 900,
    lineHeight: 1.17,
    textAlign: 'left',
    color: '#000',
    margin:'15px 0',
    '@media (max-width: 800px)' : {
        fontSize: '24px',
    }  
  },
  btn:{
    width: '153.5px',
    height: '44px',
    border: 'solid 1px #5594fe',
    backgroundColor: '#fff',
    fontFamily: 'BrandonGrotesque',
    fontSize: '16px',
    fontWeight: 900,
    lineHeight: 1.19,
    color: '#5594fe',
    '@media (max-width: 800px)' : {
        fontSize: '14px',
    }  
  },
  art:{
    fontFamily: 'Kalam',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.57,
    color: '#747d95',
  },
  easy:{
      fontFamily: 'Work Sans',
      fontSize: '20px',
      lineHeight: 1.2,
      color: '#000000',
      margin:'30px 0'
  },
  surp:{
      fontFamily: 'Work Sans',
      fontSize: '14px',
      lineHeight: 1.14,
      color: '#000000',
  },
  grd:{
      padding:'60px',
      alignItems:'center',
    '@media (max-width: 800px)' : {
        padding:'30px'
    }  
  }
}));
const SecC = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.grd}>
        <Grid item md={6} sm={12} className={classes.grid}>
        <h3 className={classes.pub}>Publications</h3>
        <h1 className={classes.work}>Some of my work</h1>
        <div className={classes.dpub}>
          <button className={classes.btn}>MORE ARTICLES</button>
          <img src={arrow} alt="" />
          <h3 className={classes.art}>Click here to see my 239 publications</h3>
        </div>
        </Grid>
        <Grid item md={3} sm={6} container justify='center'>
          <Paper className={classes.paper}>
              <img src={uber} alt="" />
              <h1 className={classes.easy}>Easy to start new</h1>
              <p className={classes.surp}>We make it surprisingly easy to  get up and running.</p>
          </Paper>
        </Grid>
        <Grid item md={3} sm={6} container justify='center'>
          <Paper className={classes.paper}>
              <img src={uber} alt="" />
              <h1 className={classes.easy}>Easy to start new</h1>
              <p className={classes.surp}>We make it surprisingly easy to  get up and running.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default SecC;