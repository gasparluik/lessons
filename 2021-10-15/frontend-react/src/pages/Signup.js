import React, { useState, useContext } from "react";
import { Button, Input, Form } from "antd";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";
import { registerUser } from "../store/actions";
import { Context } from "../store";

import "./RegisterForm.css";

//TO-DO lisada submitHandler

function Signup() {
  const [email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName] = useState("");
  const [state, dispatch] = useContext(Context);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async (e) => {
    setFirstName(e.firstName);
    setLastName(e.lastName);
    setEmail(e.email);
    setPassword(e.password);

    const userData = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: e.password
    };

    //fetchi andmebaasist userdata andmetega registreeritud kasutaja
    const res = await fetch("http://localhost:8081/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    //returni fetchitud response json kujul
    const returnData = await res.json();
    //kui fetchitud vastusel on token, siis logi sisse
    if (returnData.ok) {
      console.log("User registered")
      dispatch(registerUser(returnData))
    }
  };

  //password show ja hidden toggler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="body">
      <Form onFinish={handleSubmit}>
        <div className="form-inner">
          <h1>Register</h1>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please insert your username!",
              },
            ]}
          >
            <Input placeholder="example@tlu.ee" />
          </Form.Item>
          <Form.Item
            label="First name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Enter your first name",
              },
            ]}
          >
            <Input placeholder="John" />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Enter your last name",
              },
            ]}
          >
            <Input placeholder="Doe" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please insert your password!",
              },
            ]}
          >
            <Input
              type={passwordShown ? "text" : "password"}
              placeholder="password"
            />
            <EyeInvisibleFilled onClick={togglePassword} />

          </Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
