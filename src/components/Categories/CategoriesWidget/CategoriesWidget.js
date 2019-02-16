import React, { Component } from "react";
import "./CategoriesWidget.scss";

class CategoriesWidget extends Component {
  state = {
    categoriesItem: [
      {
        id: 1,
        cateName: "Bathroom",
        quantity: 1,
        isChecked: false
      },
      {
        id: 2,
        cateName: "Kitchen",
        quantity: 2,
        isChecked: false
      },
      {
        id: 3,
        cateName: "Ballroom",
        quantity: 3,
        isChecked: false
      },
      {
        id: 4,
        cateName: "Livingroom",
        quantity: 4,
        isChecked: false
      }
    ]
  };
  onChange = id => {
    return this.setState({
      categoriesItem: this.state.categoriesItem.map(item => {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
        }
        return item;
      })
    });
  };
  render() {
    return (
      <nav className="menu-categories">
        <h2 className="title-category">Categories</h2>
        <ul className="cate-panel">
          {this.state.categoriesItem
            .sort(
              (a, b) => a.isChecked !== b.isChecked && a.isChecked === false
            )
            .map(item => (
              <li className="cate-item">
                <input
                  type="checkbox"
                  id={"checkbox_" + item.id}
                  checked={item.isChecked}
                  onChange={() => this.onChange(item.id)}
                />
                &nbsp;
                <p>{item.cateName}</p>
                <span>{item.quantity}</span>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}
export default CategoriesWidget;
