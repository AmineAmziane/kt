import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


//import './index.scss'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'20px 0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  ul:{
  	display:'flex',
  	margin:'0 0 0 20px'
  },
  ulr:{
  	position:'absolute',
  	display:'none',
  	margin:'0 0 0 20px'
  },
  kt:{
  	fontSize: '64px',
	fontWeight: 800,
	lineHeight: 1.19,
	letterSpacing: '1.92px',
	textAlign: 'center',
	color: '#000000',
  },
  li:{
  	fontFamily:'Work Sans',
	fontSize: '14px',
	lineHeight: '1.14',
	textAlign: 'left',
	color: '#000000',
	margin:'0 25px'
  },
  button:{
	  width: '174px',
	  height: '41px',
	  borderRadius: '3px',
	  backgroundColor: '#5594fe',
  	  fontFamily: 'Work Sans',
	  fontSize: '15px',
	  fontWeight: 800,
	  lineHeight: 1.2,
	  color: '#fff',
	  border:'0'
  },
  grid:{
    margin:'40px 0'
  }
}));
const Navbar = () => {
    const matches = useMediaQuery('(min-width:800px)');
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems='center'>
        <Grid item xs={1}>
          <h1 className={classes.kt} >
            KT
          </h1>
        </Grid>
        <Grid item xs={8} >
          <nav >
           <ul className={matches?classes.ul:classes.ulr}>
             <li className={classes.li}>About me</li>
             <li className={classes.li}>Experience</li>
             <li className={classes.li}>Samples</li>
           </ul>
          </nav>
        </Grid>
        <Grid item xs={3} container justify='flex-end'>
        {
          matches?(<button className={classes.button} >
	              WORK WITH ME
	           </button>)
          :(<i className="fa fa-bars fa-3x"></i>)
        }
        </Grid>
      </Grid>
    </div>
  )
}

export default Navbar;