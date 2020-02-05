import React from "react";
import { Link } from "react-router-dom";

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

class StepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: window.QuestionBank.questions
        }
    } 

    onsubmit = () => {
        var step_one_data = { "us_state": this.state.us_state, "w2_q": this.state.w2_q, "h20_q": this.state.h20_q }
        // console.log('Created :' + this.state.email);
        fetch('http://nutshellapp.herokuapp.com/api/user/step-one',
            {
                method: 'post', body: JSON.stringify(step_one_data),
                headers: {
                    'Content-Type': 'application/json'

                }
            }).then(function (response) { return response.json(); });
        // .then(function (data) { console.log('Created :' + this.state.email) });
    }


    render() {
        //console.log(window);
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
                    <h1 className="lead">State Eligibility</h1>

     
            </div>
            <Card>
              <CardBody>
                <div className="m-sm-4">
                  <Form>
                    <FormGroup>
                        <Label>{this.state.questions[0].title}</Label>
                        <Input
                            required
                            type="select"
                            id="exampleCustomSelect"
                            name="us_state"
                            className="mb-3"
                            onChange={(e) => this.setState({ us_state: e.target.value })}
                        >   <option value="">Select</option>  
                            <option value="ny">New York</option>      
                                        
                        </Input>
                    </FormGroup>

                                <FormGroup>
                                    <Label>{this.state.questions[1].title}</Label>
                                 </FormGroup>
                                <FormGroup check className="mb-2">
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="w2_q"
                                            value="yes"
                                            onChange={(e) => this.setState({ w2_q: e.target.value })} />
                                        Yes
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="mb-2">
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="w2_q"
                                            value="no"
                                            onChange={(e) => this.setState({ w2_q: e.target.value })} /> 
                                        No
                                     </Label>
                                </FormGroup>
            
                <FormGroup>
                    <Label>{window.QuestionBank.questions[2].title}</Label>
                </FormGroup>

                <FormGroup check className="mb-2">
                    <Label check>
                        <Input 
                            type="radio"
                            name="h20_q"
                            value="yes"
                            onChange={
                                (e) => {
                                    this.setState({ h20_q: e.target.value })
                                           
                                }
                            } />
                        Yes
                    </Label>
                </FormGroup>

                <FormGroup check className="mb-2">
                    <Label check>
                         <Input
                            type="radio"
                            name="h20_q"
                            value="no"
                            onChange={
                                (e) => {
                                    this.setState({ h20_q: e.target.value })
                                   
                                    } 
                                 } />
                                No
                    </Label> 
                </FormGroup>


        <FormGroup>                                                           
            <Label>{window.QuestionBank.questions[3].title}</Label>                                
        </FormGroup>
        <FormGroup check className="mb-2">
            <Label check>
            <Input type="radio" name="h26_q" value="yes" onChange={(e) => this.setState({ h26_q: e.target.value })} />
            Yes
            </Label>
        </FormGroup>
        <FormGroup check className="mb-2">
            <Label check>
                <Input type="radio" name="h26_q" value="no" onChange={(e) => this.setState({ h26_q: e.target.value })} /> No
                </Label>
        </FormGroup>


        <FormGroup>
            <Label>{window.QuestionBank.questions[4].title}</Label>
        </FormGroup>
        <FormGroup check className="mb-2">
            <Label check>
                <Input type="radio" name="h175_q" value="yes" onChange={(e) => this.setState({ h175_q: e.target.value })} />
                Yes
            </Label>
        </FormGroup>
        <FormGroup check className="mb-2">
            <Label check>
                <Input type="radio" name="h175_q" value="no" onChange={(e) => this.setState({ h175_q: e.target.value })} /> No
                </Label>
                                </FormGroup>

        <FormGroup>
            <Label>{window.QuestionBank.questions[5].title} </Label>
            </FormGroup>
            <FormGroup check className="mb-2">
            <Label check>
            <Input type="radio" name="p-birthing" value="birthing mother" onChange={(e) => this.setState({ h175_q: e.target.value })} />
            Yes
            </Label>
            </FormGroup>
            <FormGroup check className="mb-2">
            <Label check>
            <Input type="radio" name="p-birthing" value="non-birthing care-giver" onChange={(e) => this.setState({ h175_q: e.target.value })} /> No
            </Label>
        </FormGroup>





                                <div className="mt-2">
                                <div className="text-left mt-1">              
                                        <Button color="primary" size="lg" onClick={() => { this.onsubmit() }}>
                                          Continue
                                     </Button>           
                                </div>
                                <div className="text-left mt-1">
                                    <Link to="/dashboard/default">                    
                                        Cancel                   
                                    </Link>
                                    </div>
                                 </div>
                  </Form>
                </div>
              </CardBody>
            </Card>
                  </React.Fragment>
              )
    }
}

export default StepOne;
