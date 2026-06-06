import React, { useState } from "react";
import "./styles.css";

const menuItems = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://lilluna.com/wp-content/uploads/2026/03/pancakes-recipe-resize-16.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    name: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2021/06/20210521-ACS_7346.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://i.ytimg.com/vi/8bDHGUvbR2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDL2Co3HIZ9rzGbIn3FfQEvyPAPuQ",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    name: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "https://hotel-menu-javascript.netlify.app/images/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },
  {
    id: 5,
    name: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "https://www.marthastewart.com/thmb/7Y3rcgg8RPdK4mzdMufIAazn8Tc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-1014042-Charred-Tomatoes-With-Fried-Eggs-Hero-3x2-0a74305cfde44fd0bfce3fb2cf523e05.jpg",
    desc: "franzen vegan pabst bicycle rights kickstarter",
  },
  {
    id: 6,
    name: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3-480x270.jpg",
    desc: "Portland chicharrones ethical edison bulb,",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div id="main">
      <div className="menu-header">
        <h2 className="menu-title">Our Menu</h2>
        <div className="title-underline"></div>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setActiveCategory("all")}>All</button>
        <button id="filter-btn-1" onClick={() => setActiveCategory("breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => setActiveCategory("lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => setActiveCategory("shakes")}>Shakes</button>
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            data-test-id={`menu-item-${item.category}`}
          >
            <img src={item.img} alt={item.name} className="item-img" />
            <div className="item-info">
              <div className="item-header">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-price">$ {item.price.toFixed(2)}</span>
              </div>
              <div className="item-divider"></div>
              <p className="item-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;