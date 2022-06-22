import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

     function onClik () {

        let sidebar = document.querySelector('.sidebar');
        let sidebarActive = sidebar.classList.contains('active');

        let toggle = document.querySelector('.btn-toggle');
        let navBar = document.querySelector('.top-dock');
        let mainScreen = document.querySelector('.main-screen');
        let togSammich = document.querySelector('#tog-sammy');
        let togX = document.querySelector('#tog-x');
        
        if(sidebarActive) {
            toggle.classList.remove('active');
            navBar.classList.remove('active');
            togSammich.classList.remove('active');
            togX.classList.remove('active');
            mainScreen.classList.remove('active');
            sidebar.classList.remove('active');
        } else {
            toggle.classList.remove('active');
            navBar.classList.remove('active');
            togSammich.classList.remove('active');
            togX.classList.remove('active');
            mainScreen.classList.remove('active');
            sidebar.classList.remove('active');
        }
    }

  return (
    <div id="sidebar" className="sidebar">
         <ul className="ull">
            <Link to="/dashboard/home" className="main-list-item">
                <div href="/dashboard/" className="main-anchor">
                    <span className="main-emblem"><img src="public/images/logo.png" alt="Logo"/></span>
                    <span className="main-title">Wor::Cout</span>
                </div>
            </Link>
           <Link id="itemHome" className="list-item" to="/dashboard/home" onClick={onClik}>
                <div href="/dashboard/home" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-area-chart text-decoration-none" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Dashboard</span>
                </div>
            </Link>
            <Link id="itemAdd"  className="list-item" to="/dashboard/add-workout" onClick={onClik}>
                <div href="/dashboard/add-workout" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i style={{zoom: "1.4"}} className="fa-solid fa-file-circle-plus" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Add Workouts</span>
                </div>
            </Link>
            <Link id="itemLog"  className="list-item" to="/dashboard/log-workout" onClick={onClik}>
                <div href="/dashboard/log-workout" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i style={{zoom: "1.4"}} className="fa-solid fa-dumbbell" aria-hidden="true" /></span>
                    <span className="minor-title text-decoration-none">Begin Workout</span>
                </div>
            </Link>
            <Link id="itemCalc" className="list-item" to="/dashboard/calculator" onClick={onClik}>
                <div href="/dashboard/calculator" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i style={{zoom: "1.7"}} className="fa-solid fa-calculator" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Calculator</span>
                </div>
            </Link>
            <Link id="itemFAQ" className="list-item" to="/dashboard/FAQ" onClick={onClik}>
                <div href="/dashboard/FAQ" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i style={{zoom: "1.4", paddingTop: '2px'}} className="fa-solid fa-circle-question"></i></span>
                    <span className="minor-title text-decoration-none">FAQ Page</span>
                </div>
            </Link>
            <Link id="itemGoals" className="list-item" to="/dashboard/goals" onClick={onClik}>
                <div href="/dashboard/goals" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-trophy" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Goals</span>
                </div>
            </Link>
            <Link id="itemSettings" className="list-item" to="/dashboard/settings" onClick={onClik}>
                <div href="/dashboard/settings" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-cogs" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Settings</span>
                </div>
            </Link>
            <Link id="itemSign" className="list-item" to="/dashboard/sign-out" onClick={onClik}>
                <div href="/dashboard/sign-out" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-sign-out" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Sign Out</span>
                </div>
            </Link>
        </ul> 
    </div>
  )

}
export { Sidebar };