import React from "react";
import Logo from "../images/Pizza-logo-design-template-Vector-PNG.png";
import Bgimg from "../images/chad-montano-MqT0asuoIcU-unsplash.jpg";
import { Link } from "react-router-dom";
import usePasswordToggle from "../hooks/usePasswordToggle";

const Signup = () => {
  const [Eye, eye, password] = usePasswordToggle();

  return (
    <div className="content">
      <div className="container-signup">
        <div className="cover">
          <div className="front">
            <img src={Bgimg} alt="pizza_image" />
            <div className="text">
              <span className="fortext">
                Join With Neth Pizza <br /> With Free Delivery.
              </span>
            </div>
          </div>
        </div>
        <form action="#">
          <div className="form-content">
            <div className="formBox">
              <h2>Signup</h2>
              <div className="input-boxes">
                <div className="input-box">
                  <input type="text" name="email" placeholder="Email Address" />
                </div>
                <div className="input-box">
                  <input
                    type={password}
                    name="password"
                    placeholder="Password"
                  />
                  <i
                    onClick={Eye}
                    className={`bi ${eye ? "bi-eye" : "bi-eye-slash"}`}
                  ></i>
                </div>
                <div className="input-box">
                  <input
                    type={password}
                    name="conf-password"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="button input-box">
                  <input type="submit" value="SIGNUP" />
                </div>
                <div className="login-text" id="login-text">
                  <Link to="/">Already have an account?</Link>
                </div>
                <br />
                <div className="text" id="description">
                  <text>
                    Welcome to the official website of Neth Pizza (Sri Lanka).{" "}
                    <br /> Call Us or order online and don't forget to enjoy
                    FREE delivery!
                  </text>
                </div>
                <div className="imgBox" id="logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="text" id="disclaimer">
                  <text>COPYRIGHT © 2021 Neth Pizza. ALL RIGHTS RESERVED.</text>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
