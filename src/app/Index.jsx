import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';
import { Nav, PrivateRoute, Alert } from '@/_components';
import { Home } from '@/home';
import { Profile } from '@/profile';
import { Admin } from '@/admin';
import { Account } from '@/account';
import { DashHome } from '@/dash-home';
import { Header } from '@/header';
import { Sidebar } from '@/sidebar';
import { AddWorkout } from '@/addworkouts';
import { LogWorkout } from '@/logworkouts';
import { Measurements } from '@/measurements';
import { Goals } from '@/goals';
import { Settings } from '@/settings';
import { SignOut } from '@/signout';
import { Calculator } from '@/caloriecalculator';



function App() {
    

    const { pathname } = useLocation();  
    const [user, setUser] = useState({});

        useEffect(() => {
            const subscription = accountService.user.subscribe(x => setUser(x));
            return subscription.unsubscribe;
        }, []);

    return (
        <div className={'app-container' + (user && ' bg-light')}>
                {!accountService.userValue && <><Nav /> <Alert /></>}
                {accountService.userValue && <><Header /> <Sidebar /></>}
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
                    <Route path="/account" component={Account} />

                    <Route path='/dashboard/home' component={DashHome} />
                    <Route path='/dashboard/add-workout' component={AddWorkout} />
                    <Route path='/dashboard/log-workout' component={LogWorkout} />
                    <Route path='/dashboard/calculator' component={Calculator} />
                    <Route path='/dashboard/FAQ' component={Measurements} />
                    <Route path='/dashboard/goals' component={Goals} />
                    <Route path='/dashboard/settings' component={Settings} />
                    <Route path='/dashboard/sign-out' component={SignOut} />
                    {/* <Redirect from="*" to="/dashboard" />
                    <Redirect from="*" to="/" /> */}
                </Switch>                                                                                                           
            </div>
    );
}

export { App }; 