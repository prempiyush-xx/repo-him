import React from "react";
//import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import logo from "../../assets/img/brands/nutshell_logo.png";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { "name": "name", "email": "email", "password": "password" };
    }


    onsubmit = () => {
        var opts = { "name": this.state.name, "email": this.state.email, "password": this.state.password }
        //console.log('Created :' + this.state.email);
        fetch('http://nutshellapp.herokuapp.com/api/user/signup',
            {
                method: 'post', body: JSON.stringify(opts),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) { return response.json(); });
           /* .then(data => {
                // Work with JSON data here
                console.log(data);
            }).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
            //.then(function (data) { console.log('Created :' + this.state.email) });*/
    }

        render() {

        return (
  <React.Fragment>
                <div className="text-center mt-4">
                    <div className="text-center">
                        <img
                            src={logo}
                            alt="Nutshell"
                            className="img-fluid rounded-circle"
                            width="250"
                            height="132"
                        />
                    </div>
                    <h1 className="lead">Sign up now to optimize your parental leave plan</h1>
                   
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <Form>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                bsSize="lg"
                type="text"
                name="name"
                                        placeholder="Enter your first name"
                                        onChange={(e) => this.setState({ name: e.target.value })}
              />
            </FormGroup>
           
            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
            bsSize="lg"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
              />
            </FormGroup>
            <div className="text-center mt-3">
             
                  <Button color="primary" size="lg" onClick={() => { this.onsubmit() }}>
                  Sign up
                </Button>
          
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
        )
    }
}

export default SignUp;


