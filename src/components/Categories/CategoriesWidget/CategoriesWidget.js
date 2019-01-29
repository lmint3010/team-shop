import React, { Component } from "react";
import './CategoriesWidget.scss';

class CategoriesWidget extends Component {
  render() {
    return (
      <nav className="menu-categories">
        <h2 className="title-category">Categories</h2>
          <div className="cate-panel">
            <div className="cate-item">
              <input type="checkbox"/>
              &nbsp;
              <p>Bathroom</p>
              <span>100</span>
            </div>
            <div className="cate-item">
              <input type="checkbox"/>
              &nbsp;
              <p>Bathroom</p>
              <span>100</span>
            </div>
            <div className="cate-item">
              <input type="checkbox"/>
              &nbsp;
              <p>Bathroom</p>
              <span>100</span>
            </div>
            <div className="cate-item">
              <input type="checkbox"/>
              &nbsp;
              <p>Bathroom</p>
              <span>100</span>
            </div>
            <div className="cate-item">
              <input type="checkbox"/>
              &nbsp;
              <p>Bathroom</p>
              <span>100</span>
            </div>
            <div className="cate-item">
              <input type="checkbox"/>
              &nbsp;
              <p>Bathroom</p>
              <span>100</span>
            </div>
            
             </div>
      </nav>
    );
  }
}
export default CategoriesWidget;
