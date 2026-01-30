"use client";

import { useState } from "react";

export default function Instructions({ instructionsList, setInstructionsList }) {
  const [newInstruction, setNewInstruction] = useState('');
  
const handleInstructionAdd = () => {
    if (!newInstruction.trim()) return; 

    const thisInstruction = {
      instruction: newInstruction
    };
    setInstructionsList([...instructionsList, thisInstruction]);
    setNewInstruction(''); 
  };

  const handleInstructionRemove = (index) => {
    const updatedInstructions = [...instructionsList];
    updatedInstructions.splice(index, 1);
    setInstructionsList(updatedInstructions);
  };

  const handleInstructionChange = (event) => {
    setNewInstruction(event.target.value);
  };

  return (
    <div className="mt-6" onSubmit={handleInstructionAdd}>
      <h3 className="text-xl font-semibold text-gray-800">Add a New Instruction</h3>
      
      <div className="flex flex-col md:flex-row items-start gap-4 mt-4 ml-6">
        <div className="w-full md:w-1/2 flex flex-col space-y-1">
          <label htmlFor="instruction" className="text-sm font-medium text-gray-600">
            New Instructions
          </label>
          <textarea
            name="instruction"
            id="instruction"
            value={newInstruction}
            onChange={(e) => setNewInstruction(e.target.value)}
            rows={3}
            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                       focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
                       sm:text-sm resize-y"
            placeholder="Step-by-step instructions..."
          />
        </div>

        <button 
          type="button" 
          onClick={handleInstructionAdd}
          className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-colors mt-6"
        >
          Add an Instruction
        </button> 
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-8">Instructions</h3>
      
      <div className="mt-4 ml-6">
        <ol className="list-decimal space-y-4">
          {instructionsList.map((instruction, index) => (
            <li key={index} className="text-gray-700 pl-2">
              <div className="flex items-start justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="flex-1">{instruction.instruction}</span>
                <button
                  type="button"
                  onClick={() => handleInstructionRemove(index)}
                  className="ml-4 text-xs text-red-600 hover:text-red-800 border border-red-200 hover:border-red-600 px-2 py-1 rounded transition-all shrink-0"
                >
                  Remove
                </button>
              </div>
            </li>
          ))} 
        </ol>
      </div>
    </div>
  );
}