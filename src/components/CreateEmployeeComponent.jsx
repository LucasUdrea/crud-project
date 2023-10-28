import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            redirect: false,
        };
        this.chageFirstNameHandler = this.chageFirstNameHandler.bind(this);
        this.chageLastNameHandler = this.chageLastNameHandler.bind(this);
        this.chageEmailIdHandler = this.chageEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee);
        }
    

    chageFirstNameHandler= (event)=> {
        this.setState({firstName: event.target.value});
    }
    chageLastNameHandler= (event)=> {
        this.setState({lastName: event.target.value});
    }
    chageEmailIdHandler= (event)=> {
        this.setState({emailId: event.target.value});
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-12 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                                <div className='card-body'>
                                    <form action="">
                                        <div className='form-group'>
                                            <label htmlFor="">First Name</label>
                                            <input placeholder='First Name' name='firstName' className='form-control'
                                                value={this.state.firstName} onChange={this.chageFirstNameHandler} />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor="">Last Name</label>
                                            <input placeholder='Last Name' name='lastName' className='form-control'
                                                value={this.state.lastName} onChange={this.chageLastNameHandler} />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor="">Email</label>
                                            <input placeholder='First Name' name='emailId' className='form-control'
                                                value={this.state.emailId} onChange={this.chageEmailIdHandler} />
                                        </div>

                                    <button style={{marginRight:10} } className='btn btn-success'onClick={this.saveEmployee}>Save</button>
                                    <Link to="/employees" className="btn btn-danger">Cancel</Link>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;