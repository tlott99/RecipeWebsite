import checkbox from "./Components/Checkbox";
import BasicMenu from "./Components/DropMenu";
import UnitMenu from "./Components/Select";
import Ingredients from "./Components/Ingredients";
// const Database = require("@replit/database")
export default function Experiment() {
  // const db = new Database()
  // db.set("recipe1", "{'name':'Spaghetti'}").then(() => {});
  return (
    <div>
      <BasicMenu/>
      <h2 tag="Title">Easy Spaghetti Recipe</h2>
      <br></br>
      <div id="parent">
        <div class="child">{checkbox("Breakfast")}</div>
        <div class="child">{checkbox("Lunch")}</div>
        <div class="child">{checkbox("Dinner")}</div>
        <div class="child">{checkbox("Snack")}</div>
        <div class="child">{checkbox("Drink")}</div>
        <div class="child">{checkbox("Dessert")}</div>
      </div>
      <p tag="description">This comes from aunt suzie, it was in yada yada cook book from the year 1974</p>
      <UnitMenu/>
      <ul>
        <li>1 lb Hamburger</li>
        <li>2 Cubes Beef Bouillion</li>
        <li>1 Can Tomato Sauce</li>
        <li>1 Can Tomato Paste</li>
        <li>Pepper</li>
        <li>2 Cups Hot Water</li>
        <li>2 tsp Sugar</li>
        <li>1/2 tsp dried basil</li>
        <li>1/2 tsp dried oregano</li>
        <li>dash of garlic</li>
        <li>16 oz spaghetti noodles</li>
      </ul>
     <Ingredients></Ingredients>
      <h4>Instructions</h4>
      <ol tag="Instructions">
        <li>Brown your hamburger in a large pan.</li>
        <li>Once cooked, throw in salt, pepper, tomato sauce and paste, water (with the bouillon cubes in it), sugar, basil, oregano and garlic. Simmer on low for an hour.</li>
        <li>A few minutes before the hour is done, cook box of spaghetti noodles as directed on package.</li>
        <li>Once the noodles are cooked, drain and add to spaghetti sauce. ENJOY!</li>
      </ol>
    </div>
  )
}