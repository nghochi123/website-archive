import './App.css';

import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';
import {useTransition, animated, config} from 'react-spring';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './containers/Home/Home';

import Page404 from './containers/404/404';
import Background from './components/Background/Background';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Links from './containers/Links/Links';

function App() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    config: config.gentle,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    order: ['leave', 'enter', 'update'],
    // config: {
    //   duration: 4000 // duration for the whole animation form start to end
    // }
  })
  let routes = (
    transitions.map(({item: location, props, key})=>{
      return (
      <animated.div key={key} style={props}>
        <Switch location={location}>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path = "/projects" exact component={Projects}/>
          <Route path="/links" exact component={Links}/>

          <Route path="/404" exact component={Page404}/>
          <Redirect to="/404"></Redirect>
        </Switch>
      </animated.div>
    )})
  )
  let height = null;
  let path = null;
  if(location.pathname === "/about"){
    height = "1985px";
  }
  if(location.pathname === "/"){
    path = "home";
  }
  return (
    <Background height={height} path={path}>
      {routes}
    </Background>  
  );
}

export default App;
