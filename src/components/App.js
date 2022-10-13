import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

console.log(itemData)

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function submitNewItem(event, newName, newCategory) {
    event.preventDefault()
    setItems([
      ...items,
      {
        id: items.length+1,
        name: newName,
        category: newCategory
      }
    ])
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onSubmit={submitNewItem}/>
    </div>
  );
}

export default App;
