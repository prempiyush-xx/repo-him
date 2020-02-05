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

const ResetPassword = () => (
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
            <h1 className="lead">Reset Password</h1>
        <p className="lead">Enter your email and we'll send you a link.</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <div className="text-center mt-3">
              <Link to="/dashboard/default">
                <Button color="primary" size="lg">
                  Reset password
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default ResetPassword;
