import React from 'react';
import { SIGN_IN_PATH } from '../constants/routeConstants/RouteConstants.js';
import SignInRoute from './SignInRoute.js';
import { Route } from 'react-router-dom';

export const authenticationRoutes = <Route path={SIGN_IN_PATH} component={SignInRoute}/>;
