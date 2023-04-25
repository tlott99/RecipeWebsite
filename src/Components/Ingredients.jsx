import { React, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Ingredients() {
  const [ingredientsList, setIngredientsList] = useState([
    { ingredient: "" },
  ])
  console.log(ingredientsList);
  
  const handleIngredientAdd = () => {
    setIngredientsList([...ingredientsList, { ingredient: "" }])
  }
  const handleIngredientRemove = (index) => {
    const list = [...ingredientsList]
    console.log("index on remove", index)
    list.splice(index, 1)
    setIngredientsList(list)
  }
  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target
    const list = [...ingredientsList]
    list[index][name] = value;
    setIngredientsList(list)
  }



  return (
    <form className="App">
      <div className="form-field">
        <label htmlFor="ingredient">Ingredients</label>
        {ingredientsList.map((singleIngredient, index) => (
          <div key={index} className="ingredients">
            <div className="first-division">
              <TextField name="ingredient" type="text" id="ingredient" required
                defaultValue={singleIngredient.ingredient}
                onChange={(e) => handleIngredientChange(e, index)}
              />
              {ingredientsList.length - 1 === index && ingredientsList.length < 15 &&
                (<button type="button" classname="add-btn"
                  onClick={handleIngredientAdd}>
                  <span>Add an Ingredient</span>
                </button>
                )}

            </div>
            <div className="second-division">
              {ingredientsList.length > 1 && (
                <button type="button" className="remove-btn"
                  onClick={() => handleIngredientRemove(index)}>
                  <span>Remove</span>
                </button>
              )}

            </div>
          </div>
        ))}

      </div>
      <div className="output">
        <h2>Output</h2>
        {ingredientsList.map((singleIngredient, index) => (
          <ul key={index}>
            {singleIngredient.ingredient && <li>singleIngredient.ingredient</li>}
          </ul>
        ))}
      </div>
    </form>
  );
}

