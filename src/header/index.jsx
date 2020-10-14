import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Img from './../assets/hunter-matthews-KN0Wpxr7q1o-unsplash@2x.png'
import Img2 from './../assets/mobile_image@2x.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';

//import './index.scss'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  nh:{
    fontFamily: 'Work Sans',
    fontSize: '30px',
    fontWeight: 800,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal',
    textAlign: 'left',
    color:'#000000',
  },
  lorem:{
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 2,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
    margin:'20px 0'
  },
  btn:{
    width: '268px',
    height: '41px',
    borderRadius: '3px',
    backgroundColor: '#e9f2fe',
    fontWeight: 800,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#5594fe',
    border:'0'
  },
  img:props =>({
    width:props.matches? '588px':'90%',
    height: props.matches? '494px':'90%',
    borderRadius: '6px',
  }),
  grid:{
    margin:'6 0px 0',
    display:'flex',
    flexWrap:'wrap',
  },
  dgr:{
    width:'100%',
    height:'auto'
  }
}));
const Header = () => {
    const matches2 = useMediaQuery('(min-width:1280px)');
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems='center' className={classes.grid} justify='space-around' wrap='wrap-reverse' direction={matches2?'':'column-reverse'}>
        <Grid item sm={12} lg={6} style={{textAlign:'left'}}>
          <h1 className={classes.nh}>
            Hi, I’m Kiara.<span  role="img" aria-label="donut"> 👋</span>
          </h1>
          <p className={classes.lorem}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          </p>
          <button className={classes.btn}>
              START NOW
          </button>
        </Grid>
        <Grid item sm={12} lg={6} container justify={matches2?'flex-end':'center'}>
          <div className={classes.img}>
            <img src={matches2?Img:Img2} alt="" className={classes.dgr}/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header;