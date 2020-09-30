import React, { Component } from "react";
import "./item.css";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <h6>
          &copy;{new Date().getFullYear()} Organika - Miguel Rodríguez  |  All
          Rights Reserved  |  Terms Of Services  |  Privacy
        </h6>
      </div>
    );
  }
}

export default Footer;
