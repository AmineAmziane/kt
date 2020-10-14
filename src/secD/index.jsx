import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import instagram from './../assets/iconmonstr-instagram.svg'
import twitter from './../assets/iconmonstr-twitter.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery';

//import './index.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'center',
    margin:'120px 0 40px 0'
  },
  c1:{
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: 900,
    lineHeight: 1.14,
    color: '#5594fe',
  },
  b1:{
    fontFamily: 'Work Sans',
    fontSize: '30px',
    fontWeight: 900,
    lineHeight: 1.17,
    color:' #000000', 
    margin:'30px 0' 
  },
  input: {
    width: '662px',
    height: '74px',
    borderRadius:'3px',
    border: 'solid 3px #e9f2fe',
    display:'block',
    textAlign:'center',
    margin:'15px auto',
  },
  textarea: {
    width: '662px',
    height: '211px',
    borderRadius:'3px',
    border: 'solid 3px #e9f2fe',
    display:'block',
    textAlign:'center',
    margin:'10px auto'
  },
  submit:{
    width: '662px',
    height: '74px',
    borderRadius:'3px',
    backgroundColor: '#e9f2fe',
    display:'block',
    textAlign:'center',
    fontFamily: 'Work Sans',
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: 2.44,
    color: '#5594fe',
    margin:'20px auto',
    border:0
  },
  auth:{
    fontFamily: 'Work Sans',
    fontSize: '15px',
    fontWeight: 800,
    lineHeight: 1.2,
    color: '#000',
    margin:'0 0 40px 0'
  },
  img:{
    width: '24px',
    height: '24px',
    objectFit: 'contain',
    margin:'40px 20px'
  },
  wid:{
    width:'100%'
  }
}));
const SecD = () => {
  const matches = useMediaQuery('(min-width:800px)');
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid >
        <h3 className={classes.c1}>CONTACT ME</h3>
        <h1 className={classes.b1}>Build skills. Get inspired. Empower yourself.</h1>
        <input  type="text" placeholder="Name" className={`${classes.input} ${matches?'':classes.wid}`}/>
        <input  className={`${classes.input} ${matches?'':classes.wid}`} type="email" placeholder="Email adress" />
        <input  className={`${classes.input} ${matches?'':classes.wid}`} type="text" placeholder="Business URL" />
        <input   className={`${classes.input} ${matches?'':classes.wid}`} type="text" placeholder="What kind of content are you looking for?" />
        <textarea className={`${classes.textarea} ${matches?'':classes.wid}`} placeholder="Message">
        </textarea>
        <input type="submit" value="SEND" className={`${classes.submit} ${matches?'':classes.wid}`}/>
        <div>
          <img src={twitter}  className={classes.img}alt="" />
          <img src={instagram} className={classes.img} alt="" />
        </div>
        <h1 className={classes.auth}>Copyright © 2020 KiaraTaylor.com. All rights reserved!</h1>
      </Grid>
    </div>
  )
}

export default SecD;