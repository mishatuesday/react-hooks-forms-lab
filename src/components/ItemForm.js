import React, { useState } from "react";
// import { v4 as uuid } from "uuid";


function ItemForm({onSubmit}) {
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Produce")

function submitForm(e) {
  onSubmit(e, newName, newCategory)
  setNewName("")
}

  return (
    <form className="NewItem" onSubmit={e => submitForm(e)}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange={e => setNewName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setNewCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
