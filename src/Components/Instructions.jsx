import { React, useState } from "react";
import TextField from '@mui/material/TextField';
// import BasicSelect from "./BasicSelect";
// import Input from '@mui/material/Input';


export default function Instructions({instructionsList, setInstructionsList }) {
  const [newInstruction, setNewInstruction] = useState('')
  
  const handleInstructionAdd = () => {
    const thisInstruction ={
      instruction: newInstruction
    }
    setInstructionsList([...instructionsList, thisInstruction])
  }

  const handleInstructionChange = (event) => {
    setNewInstruction(event.target.value)
  }

  return (
    <form className="App">
      <div className="form-field">
        <label htmlFor="ingredient">Add a New Instruction</label>
          <div className="ingredients">
            <div className="first-division">
              <TextField name="ingredient" type="text" id="ingredient" required
                defaultValue={''}
                onChange={handleInstructionChange}
              />
              <button type="button" className="add-btn"
                  onClick={handleInstructionAdd}>
                  <span>Add an Instruction</span>
                </button> 
            </div>
          </div>
      </div>
      <div className="output">
        <h2>Instructions</h2>
        <ol >
          {instructionsList.map((instruction, index) => (
             <li key={index}>{instruction.instruction}</li>
          ))} 
          </ol>
      </div>
    </form>
  );
}

