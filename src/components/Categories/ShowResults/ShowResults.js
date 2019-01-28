import React, { Component } from 'react';
import './ShowResults.scss';

class ShowResults extends Component {
    componentDidMount() {
        //accordion left menu
        let accordion = document.getElementsByClassName('accordion');
        let allPanel = document.getElementsByClassName('panel');
        let productItem = document.getElementsByClassName('product-item');
        for(let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function(event) {
                if(this.classList.contains('panel-active')) {
                    this.classList.remove('panel-active');
                } else {
                    for(let k = 0; k < accordion.length; k ++) {
                        accordion[k].classList.remove('panel-active');
                    }
                    this.classList.add('panel-active');
                }
                let panel = this.nextElementSibling;
                if (panel.style.display === "block"){
                    panel.style.display = "none";
                } else {
                    for(let j = 0; j < allPanel.length; j++) {
                        allPanel[j].style.display = "none";
                    }
                    panel.style.display = "block";
                }
            })
        }
        for(let i = 0; i < productItem.length; i++) {
            productItem[i].addEventListener('click', function(event) {
                if(this.classList.contains('panel-active')) {
                    this.classList.remove('panel-active');
                } else {
                    for(let k = 0; k < productItem.length; k ++) {
                        productItem[k].classList.remove('panel-active');
                    }
                    this.classList.add('panel-active');
                }
            })
        }
    }

    render () {
        return (
            <nav className="menu-categories">
                <h2 className="title-category">
                    Show Results For
                </h2>
                <div className="wrapper-menu-category">
                    <div className="accordion">
                        <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                        <p>Bathroom</p>
                        <span>100</span>
                    </div>
                    <div className="panel">
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                            <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="wrapper-menu-category">
                    <div className="accordion">
                        <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                        <p>Bathroom</p>
                        <span>100</span>
                    </div>
                    <div className="panel">
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                            <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="wrapper-menu-category">
                    <div className="accordion">
                        <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                        <p>Bathroom</p>
                        <span>100</span>
                    </div>
                    <div className="panel">
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                            <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="wrapper-menu-category">
                    <div className="accordion">
                        <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                        <p>Bathroom</p>
                        <span>100</span>
                    </div>
                    <div className="panel">
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                            <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="wrapper-menu-category">
                    <div className="accordion">
                        <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                        <p>Bathroom</p>
                        <span>100</span>
                    </div>
                    <div className="panel">
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                            <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="wrapper-menu-category">
                    <div className="accordion">
                        <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                        <p>Bathroom</p>
                        <span>100</span>
                    </div>
                    <div className="panel">
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                            <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="wrapper-menu-category">
                    <div className="accordion">
                        <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                        <p>Bathroom</p>
                        <span>100</span>
                    </div>
                    <div className="panel">
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                        <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                            <div className="product-item">
                            <img src="https://img.icons8.com/material/24/000000/more-than.png" alt="icon arrow  right" />
                            <p>Bathroom</p>
                            <span>100</span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default ShowResults;