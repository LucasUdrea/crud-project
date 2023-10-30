/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id : 1,
            firstName: '',
            lastName: '',
            emailId: '',
        };
        this.chageFirstNameHandler = this.chageFirstNameHandler.bind(this);
        this.chageLastNameHandler = this.chageLastNameHandler.bind(this);
        this.chageEmailIdHandler = this.chageEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        //const { id } = this.props.match.params.id;
        //this.setState({ id }); 
        EmployeeService.getEmployeeById(this.state.id)
            .then((res) => {
                const employee = res.data;
                console.log(JSON.stringify(employee));
                this.setState({
                //    id: employee.id,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId,
                });
            })
            .catch((error) => {
                // Handle errors, such as showing a message or redirecting
                console.error('Error fetching employee data:', error);
            });
        
    }

    updateEmployee = (e) => {
        e.preventDefault();

        const updatedEmployee = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
        };
        console.log(JSON.stringify(updatedEmployee))
       EmployeeService.updateEmployee(updatedEmployee, updatedEmployee.id)
            .then((res) => {
                // Handle successful update, e.g., show a success message or redirect
                console.log('Employee updated successfully');
            })
            .catch((error) => {
                // Handle errors, show an error message
                console.error('Error updating employee', error);
            });
    };

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
                            <h3 className='text-center'>Update Employee</h3>
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

                                    <button style={{marginRight:10} } className='btn btn-success'onClick={this.updateEmployee}>Update</button>
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

export default UpdateEmployeeComponent;