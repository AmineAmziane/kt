import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import arrow from './../assets/Groupe-2512.svg'
import uber from './../assets/uber-2.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery';
//import './index.scss'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'125px 0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  uber:{
    width: '91.5px',
    height: '31.8px',
    margin:'20px 0'
  },
  h1:{
    fontFamily: 'Kalam',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.57,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#747d95',
  },
  div:{
    textAlign:'left'
  },
  gridU:{
    width:'90%',
    margin:'0 auto'
  }
}));
const SecA = () => {
    const matches2 = useMediaQuery('(min-width:1280px)');
    const tab=[1,1,1,1,1,1]
    const classes = useStyles();
  return (
    <div className={classes.root}>
    {matches2?(<>
      <Grid  justify='flex-start' style={{justifyContent:'flex-start'}} className={classes.div}>
      <h1 className={classes.h1}>Some of my work</h1>
      <img src={arrow} alt=""/>
    </Grid>
        <Grid container spacing={1} alignItems='center' justify='space-around' className={classes.gridU}>
        {
          tab.map((i)=>(
            <div>
                  <img src={uber} alt="" className={classes.uber}/>
            </div>
          ))
        }
        </Grid></>):''
      }
    </div>
  )
}

export default SecA;