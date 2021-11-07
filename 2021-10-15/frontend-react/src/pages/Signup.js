import React, { useState } from "react";
import { Button, Input, Form } from "antd";

import "./RegisterForm.css";

//TO-DO lisada submitHandler

function Signup() {
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async (value) => {
    //sisestatud andmed määratakse ära
    const user = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
    }
    console.log(user)

    //fetchi andmebaasist userdata andmetega registreeritud kasutaja
    const res = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(user),
      })


      if (res.ok) {
        console.log("User registered successfully!");
        const successMsg = console.log("User registered successfully!") 
        // dispatch(registerUser(returnData))
      }
  }

  //password show ja hidden toggler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
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
              }
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
              },
            ]}
          >
            <Input.Password
              //type={passwordShown ? "text" : "password"}
              placeholder="...."
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
    </>
  );
}

export default Signup;
