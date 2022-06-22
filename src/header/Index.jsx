import React from 'react'
import { accountService } from '@/_services';


function Header() {

    const user = accountService.userValue;

    function toggleSidebar() {

        let sidebar = document.querySelector('.sidebar');
        let sidebarActive = sidebar.classList.contains('active');

        let toggle = document.querySelector('.btn-toggle');
        let navBar = document.querySelector('.top-dock');
        let mainScreen = document.querySelector('.main-screen');
        let togSammich = document.querySelector('#tog-sammy');
        let togX = document.querySelector('#tog-x');
        
        if(!sidebarActive) {
            toggle.classList.add('active');
            navBar.classList.add('active');
            togSammich.classList.add('active');
            togX.classList.add('active');
            mainScreen.classList.add('active');
            sidebar.classList.add('active');
        } else {
            toggle.classList.remove('active');
            navBar.classList.remove('active');
            togSammich.classList.remove('active');
            togX.classList.remove('active');
            mainScreen.classList.remove('active');
            sidebar.classList.remove('active');
        }
    }
    
    function toggleDark() {
        let btnB = document.querySelector('.btn-toggle-dark-mode');
        let togSun = document.querySelector('#toggle-sun');
        let togMoon = document.querySelector('#toggle-moon');
        
        btnB.classList.toggle('active');
        togSun.classList.toggle('active');
        togMoon.classList.toggle('active');
    }
    
    function toggleCalendar() {
        let btn = document.querySelector('.btn-toggle-all-time');
        let calMonth = document.querySelector('#cal-month');
        let calWeek = document.querySelector('#cal-week');
        calWeek.classList.toggle('active');
        calMonth.classList.toggle('active');
        btn.classList.toggle('active');
    }
    
    function toggleUnit() {
        let btnU = document.querySelector('.btn-units');
        btnU.classList.toggle('active');
    }
    
    function openInfo() {
        let btn = document.querySelector('.drop-down');
        let info1 = document.querySelector('.top-container');
        let info2 = document.querySelector('.top-page-info');
        info1.classList.toggle('active');
        info2.classList.toggle('active');
        btn.classList.toggle('active');
    }

     return (
         
        <header>
              <div className="top-dock">
                 <div className="btn-toggle"  onClick={toggleSidebar}>
                     <i id="tog-sammy" className="fa fa-bars" aria-hidden="true"></i>
                     <i id="tog-x" className="fa fa-times" aria-hidden="true"></i>
                 </div>
                 <div className="btn-section replacable-section">
                     <div className="top-divider"></div>
                     <div id="langModalBtn" className="modalButton btn-language" title="Change the Language">
                         <i className="fa fa-globe" aria-hidden="true"></i>
                     </div>
                     <div id="quoteModalBtn" className="modalButton btn-quote" title="Quote Someone">
                         <i className="fa fa-quote-right" aria-hidden="true"></i>
                     </div>
                     <div id="notifModalBtn" className="modalButton btn-notify" title="Turn on Notifications">
                         <i className="fa fa-bell" aria-hidden="true"></i>
                     </div>
                     <div className="top-divider"></div>
                 </div>
                 <div className="btn-section">
                     <div className="top-divider"></div>
                     <div className="btn-toggle-dark-mode" onClick={toggleDark} title="Toggle Dark Mode">
                         <i id="toggle-sun" className="fa fa-sun-o" aria-hidden="true"></i>
                         <i id="toggle-moon" className="fa fa-moon-o" aria-hidden="true"></i>
                     </div>
                     <div className="btn-toggle-all-time" onClick={toggleCalendar} title="Change Time-Frame">
                         <i id="cal-week" className="fa fa-calendar-o" aria-hidden="true"></i>
                         <i id="cal-month" className="fa fa-calendar" aria-hidden="true"></i>
                     </div>
                     <div className="btn-units" onClick={toggleUnit} title="Change Unit of Measurement">
                         <i className="fa fa-flask" aria-hidden="true"></i>
                     </div>
                     <div className="top-divider"></div>
                 </div>
                 <h5 className='username-display' style={{fontSize: '14px', margin:'15px', height: '21px', marginTop: '20px'}}>{user.firstName + ' ' + user.lastName}</h5>
                 {/* <div className="user">
                     <img src={require("../def-icon.png")} alt="user_logo"/>
                 </div> */}
                 <div id="right-most-divider" className="top-divider"></div>
                 <div className="drop-down" onClick={openInfo}>
                     <i id="tog-dwn" className="fa fa-angle-down" aria-hidden="true"></i>
                     <i id="tog-up" className="fa fa-angle-up" aria-hidden="true"></i>
                 </div>
             </div> 
        </header>
    );
}

export { Header };
