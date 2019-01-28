import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Subcribe.css";

class Subcribe extends Component {
  render() {
    return (
      <div className="ps-subcribe">
        <div className="ps-contactIcon">
          <i
            className="fa fa-check-square"
            style={{ fontSize: "40px", lineHeight: "100px" }}
          />
        </div>
        <div className="ps-formInput">
          <div className="ps-wrap">
            <div>
              <h3 className="white">Subscribe our Newsletter</h3>
              <p className="white">
                Stay up to date with our latest new and products
              </p>
            </div>
            <div>
              <form>
                <div className="ps-formwrap">
                  <div className="ps-group">
                    <i
                      type="text"
                      className="ps-contactInput"
                      onFocus={this.onFocus}
                      required
                    />
                    <span className="bar" />
                    <label>Name</label>
                  </div>
                  <button type="submit" className="ps-contactSubmit">
                    <i
                      className="fa fa-paper-plane white"
                      style={{ fontSize: "30px" }}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Subcribe;
