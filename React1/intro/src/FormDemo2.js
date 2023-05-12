import React, { Component } from 'react'
import { Button,Form,FormGroup,Label,Input } from 'reactstrap'
import alertify from 'alertifyjs'

export default class FormDemo2 extends Component {

    state = {emeil:"",password:"",city : "",description:""}
    handleChange = event =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});

    }
    handleSubmit = event=>{
        event.preventDefault();
        alertify.success(this.state.emeil +  " added to DB!",2 )
    }
  render() {
    return (    
      <div>
        <FormGroup>
        <Form onSubmit={this.handleSubmit}>
            <Label for = "email">Email</Label>
            <Input type="email" 
            name="email" 
            id = "email"
             placeholder='Enter Email' 
            onChange={this.handleChange}></Input>
        </Form>
        </FormGroup>
        <FormGroup>
        <Form onSubmit={this.handleSubmit}>
            <Label for = "password">Password</Label>
            <Input type="password" 
            name="password" 
            id = "password"
             placeholder='Enter password' 
            onChange={this.handleChange}></Input>
        </Form>
        </FormGroup>
        <FormGroup>
        <Form onSubmit={this.handleSubmit}>
            <Label for = "description">Description</Label>
            <Input type="textarea" 
            name="description" 
            id = "description"
             placeholder='Enter description' 
            onChange={this.handleChange}></Input>
        </Form>
        </FormGroup>
       <FormGroup>
       <Label for = "city">City</Label>
       <Input type="select" name="city" id ="city" onchange= {this.handleChange}>
        <option>Ankara</option>
        <option>izmir</option>
        <option>Istanbul</option>
        <option>Antalya</option>

       </Input>
       </FormGroup>
       <Button type = "submit">Save</Button>
        
      </div>
    )
  }
}
