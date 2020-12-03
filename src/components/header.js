import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Manufacturing Optimization Engine
                    <span></span>
                  </h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                  </p>
                  <a href="#numbers"
                    className="btn btn-custom btn-lg page-scroll">
                    Let's Go
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
