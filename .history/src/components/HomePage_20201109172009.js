import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { FaBars } from 'react-icons/fa';
import './HomePage.css';
import Navbars from './Navbars';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
     
      render() {
        return (
          <Sidebar
            sidebar={<Navbars/>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            
          >
            
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                    <form className="form-inline" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                    
            </nav>
            
          </Sidebar>
        );
    }
}

export default HomePage;