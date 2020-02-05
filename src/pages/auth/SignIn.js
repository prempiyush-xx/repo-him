 import React from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    //CustomInput
} from "reactstrap";

import avatar from "../../assets/img/avatars/avatar.jpg";
import logo from "../../assets/img/brands/nutshell_logo.png";



class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = { "mail": "email", "password": "password" };
    }


    onsubmit = () => {
        var opts = { "email": this.state.email, "password": this.state.password }
       // console.log('Created :' + this.state.email);
        fetch('http://nutshellapp.herokuapp.com/api/user/signup',
            {
                method: 'post', body: JSON.stringify(opts),
                headers: { 
                    'Content-Type': 'application/json'
                }
            }).then(function (response) { return response.json(); });
             // .then(function (data) { console.log('Created :' + this.state.email) });
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
                  
                    <h1 className="lead">Sign in to your parental leave plan.</h1>
                </div>

                <Card>
                    <CardBody>
                        <div className="m-sm-4">
                            <div className="text-center">
                                <img
                                    src={avatar}
                                    alt="Dylan Wood"
                                    className="img-fluid rounded-circle"
                                    width="132"
                                    height="132"
                                />
                            </div>
                            <Form>

                               
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
                                        placeholder="Enter your password"
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                    <small>
                                        <Link to="/auth/reset-password">Forgot password?</Link>
                                    </small>
                                </FormGroup>
                                {/*<div>
                                    <CustomInput
                                        type="checkbox"
                                        id="rememberMe"
                                        label="Remember me next time"
                                        defaultChecked
                                    />
                                </div>*/}
                                <div className="text-center mt-3">

                                    <Button color="primary" size="lg" onClick={() => { this.onsubmit() }}>
                                        Sign in
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

export default SignIn;


