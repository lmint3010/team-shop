import React from "react";

import { Route } from "react-router-dom";
import App from "../components/App/App";

import Categories from "../components/Categories/Categories";
import Shop from "../components/Shop/Shop";
import Accessories from "../components/Accessories/Accessories";
import Pages from "../components/Pages/Pages";
import Session from "../components/Session/Session";
import ContactUs from "../components/Contact-us/ContactUs";

const routes = [
  {
    path: "/shop",
    component: Shop,
    exact: false
  },
  {
    path: "/accessories",
    component: Accessories,
    exact: false
  },
  {
    path: "/categories",
    component: Categories,
    exact: false
  },
  {
    path: "/pages",
    component: Pages,
    exact: false
  },
  {
    path: "/session",
    component: Session,
    exact: false
  },
  {
    path: "/contact",
    component: ContactUs,
    exact: false
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export { routes, RouteWithSubRoutes };
