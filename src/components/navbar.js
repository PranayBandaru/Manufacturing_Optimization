import React from "react";

export class Navigation extends React.Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="top">
            Manufacturing <br/> Optimization Engine
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#numbers" className="page-scroll">
                  Numbers
                </a>
              </li>
              <li>
                <a href="#layout" className="page-scroll">
                  Layout
                </a>
              </li>
              <li>
                <a href="#dashboard" className="page-scroll">
                  Dashboard
                </a>
              </li>
              
              <li>
                <a href="#connect" className="page-scroll">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
