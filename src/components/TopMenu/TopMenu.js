import React from "react";
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import "./TopMenu.css";
import Categories from '../Categories/Categories';

const TopMenu = () => {
  return (
      <nav id="ps-topmenu">
        <ul className="ps-topmenu">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
            <ul className="ps-submenu">
              <li>
                <a className="link" href="\#">
                  home one
                </a>
                <ul className="ps-submenu">
                  <li>
                    <a className="link" href="\#">
                      home one
                    </a>
                    <ul className="ps-submenu">
                      <li>
                        <a className="link" href="\#">
                          home one
                        </a>
                        <ul className="ps-submenu">
                          <li>
                            <a className="link" href="\#">
                              home one
                            </a>
                          </li>
                          <li>
                            <a className="link" href="\#">
                              home two
                            </a>
                          </li>
                          <li>
                            <a className="link" href="\#">
                              home three
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="link" href="\#">
                          home two
                        </a>
                      </li>
                      <li>
                        <a className="link" href="\#">
                          home three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="link" href="\#">
                      home two
                    </a>
                    <ul className="ps-submenu">
                      <li>
                        <a className="link" href="\#">
                          home one
                        </a>
                      </li>
                      <li>
                        <a className="link" href="\#">
                          home two
                        </a>
                      </li>
                      <li>
                        <a className="link" href="\#">
                          home three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="link" href="\#">
                      home three
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="link" href="\#">
                  home two
                </a>
                <ul className="ps-submenu">
                  <li>
                    <a className="link" href="\#">
                      home one
                    </a>
                  </li>
                  <li>
                    <a className="link" href="\#">
                      home two
                    </a>
                  </li>
                  <li>
                    <a className="link" href="\#">
                      home three
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="link" href="\#">
                  home three
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="link" to="/shop">
              Shop
            </Link>
            <ul className="ps-submenu">
              <li>
                <a className="link" href="\#">
                  home one
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home two
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home three
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="link" to="/accessories">
              Accessories
            </Link>
            <ul className="ps-submenu">
              <li>
                <a className="link" href="\#">
                  home one
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home two
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home three
                </a>
              </li>
            </ul>
          </li>
          <li className="ps-mega-product">
            <Link
              className="link"
              to={{
                pathname: "/categories"
              }}
            >
              Categories
            </Link>
            <div className="categories">
              <div className="wrapper-categories">
                <div className="column-4">
                  <div className="widgets">
                    <div className="widget-title">
                      <h2>MEN</h2>
                    </div>
                    <div className="widget-content">
                      <ul>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column-4">
                  <div className="widgets">
                    <div className="widget-title">
                      <h2>MEN</h2>
                    </div>
                    <div className="widget-content">
                      <ul>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column-4">
                  <div className="widgets">
                    <div className="widget-title">
                      <h2>MEN</h2>
                    </div>
                    <div className="widget-content">
                      <ul>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column-4">
                  <div className="widgets">
                    <div className="widget-title">
                      <h2>MEN</h2>
                    </div>
                    <div className="widget-content">
                      <ul>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                        <li className="item">
                          <a href="\#" className="ps-link-product">
                            JEAN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link className="link" to="/pages">
              Pages
            </Link>
            <ul className="ps-submenu">
              <li>
                <a className="link" href="\#">
                  home one
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home two
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home three
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="link" to="/session">
              Session
            </Link>
            <ul className="ps-submenu">
              <li>
                <a className="link" href="\#">
                  home one
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home two
                </a>
              </li>
              <li>
                <a className="link" href="\#">
                  home three
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default TopMenu;
