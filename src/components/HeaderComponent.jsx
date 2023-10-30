import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HeaderComponent  extends Component {
   constructor(props){
    super(props)

    this.state = {

    }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark text-white fixed-top'>
                        <div>Employee Manage App</div>
                        <Link to={"/employees"}>Home</Link> 
                    </nav>

                </header>



            </div>
        );
    }
}

export default HeaderComponent ;