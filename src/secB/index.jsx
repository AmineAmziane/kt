import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import arrow from './../assets/corn.png'
import uber from './../assets2/uber-2.svg'
import Typography from '@material-ui/core/Typography';
//import './index.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'80px 0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grd:{
    textAlign:'left'
  },
  hh:{
    fontFamily: 'Work Sans',
    fontSize: '30px',
    fontWeight: 900,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
    margin:'0 0 20px 0'
  },
  dd:{
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 2,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
    margin:'0 0 10px 0',
    width:'90%'
  },
  ty:{
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: 900,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#5594fe',
    margin:'0 0 30px 0'
  }
}));
const SecB = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} >
        <Grid item md={6} sm={12} className={classes.grd}>
          <h3 className={classes.ty}>ABOUT ME</h3>
          <h1 className={classes.hh}>Freelance copywriter</h1>
          <p className={classes.dd}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </p>
        </Grid>
      
        <Grid item md={6} sm={12} className={classes.grd}>
          <h1 className={classes.hh}>Freelance copywriter</h1>
          <p className={classes.dd}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <h1 className={classes.hh}>Freelance copywriter</h1>
          <p className={classes.dd}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default SecB;