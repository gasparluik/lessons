import React, { useState, useContext } from "react";
import { Button, Input, Form } from "antd";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";
import { loginUser } from "../store/actions";
import { Context } from "../store";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(Context);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async (e) => {
    //määra emailiks ja passwordiks inputid
    setEmail(e.email);
    setPassword(e.password);

    //kasutaja andmed mida andmebaasist otsida
    const userData = {
      email: e.email,
      password: e.password,
    };

    //fetchi andmebaasist userdata andmetega registreeritud kasutaja
    const res = await fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    //returni fetchitud response json kujul
    const returnData = await res.json();
    //kui fetchitud vastusel on token, siis logi sisse
    if (returnData.token) {
      console.log("Successfully logged in");
      dispatch(loginUser(returnData));
    }
  };

  //password show ja hidden toggler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="body">
      <Form
        onFinish={handleSubmit}
        style={{ textAlign: "center", margin: "100px" }}
      >
      <div className="form-inner">
        <h1>Login</h1>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please insert your username!",
            },
          ]}
          style={{ margin: "10px", fontSize: "20px" }}
        >
          <Input placeholder="example@tlu.ee" style={{ fontSize: "18px" }} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please insert your password!!",
            },
          ]}
        >
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="password"
          />
          <EyeInvisibleFilled onClick={togglePassword} />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
