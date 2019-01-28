import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router } from "react-router-dom";

//Team module
import { routes, RouteWithSubRoutes } from '../../Route/Route';
// Team Components
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// Team CSS
import "./App.css";

class App extends Component {
  componentDidMount() {
    let topmenu = document.querySelector('.menu-fixed');
    let menu = document.querySelector('.main-menu');
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > menu.offsetTop + 50) {
            topmenu.classList.add('visible');
        } else {
            topmenu.classList.remove('visible');
        }
    })
  }
  render () {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="menu-fixed">
          <Container>
            <div className="top-flex">
              <div className="top-logo">
                <a href="\#" title="logo">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="logo-phones-shope"
                  />
                </a>
              </div>
              <div className="top-nav">
                <TopMenu />
              </div>
            </div>
          </Container>
        </div>
        <div className="main-menu text-left">
          <Container>
            <TopMenu />
          </Container>
        </div>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App;
