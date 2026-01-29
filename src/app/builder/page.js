"use client";

import React, { useState } from "react";
import Ingredients from "@/Components/RecipeBuilderPieces/Ingredients";
import Instructions from "@/Components/RecipeBuilderPieces/Instructions";
import MealType from "@/Components/RecipeBuilderPieces/MealType";
import Description from "@/Components/RecipeBuilderPieces/Description";
import Title from "@/Components/RecipeBuilderPieces/Title";
import RecipePrivacy from "@/Components/RecipeBuilderPieces/RecipePrivacy";
import PrepTime from "@/Components/RecipeBuilderPieces/PrepTime";
import CookTime from "@/Components/RecipeBuilderPieces/CookTime";
import ServingSize from "@/Components/RecipeBuilderPieces/ServingSize";

export default function Builder() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [instructionsList, setInstructionsList] = useState([]);
  const [description, setDescription] = useState(['']);
  const [returnValue, setReturnValue] = useState(['']);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servingSize, setServingSize] = useState('');

  return (
    <div className="container mx-auto px-4 pb-12">
      {/* Title Section */}
      <div className="mt-6">
        <Title title={title} setTitle={setTitle} slug={slug} setSlug={setSlug} />
      </div>

      {/* Privacy Section */}
      <div className="mt-6">
        <RecipePrivacy privacy={privacy} setPrivacy={setPrivacy} />
      </div>

      {/* MealType Section - Responsive row on 1200px (xl), column otherwise */}
      <div className="flex flex-col xl:flex-row mt-6">
        <MealType returnValue={returnValue} setReturnValue={setReturnValue} />
      </div>

      {/* Time and Serving Info */}
      <div className="flex flex-row space-x-8 mt-6">
        <div>
          <PrepTime prepTime={prepTime} setPrepTime={setPrepTime} />
        </div>
        <div>
          <CookTime cookTime={cookTime} setCookTime={setCookTime} />
        </div>
        <div>
          <ServingSize servingSize={servingSize} setServingSize={setServingSize} />
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <Description description={description} setDescription={setDescription} />
      </div>

      {/* Ingredients Section */}
      <div className="mt-6">
        <Ingredients 
          ingredientsList={ingredientsList} 
          setIngredientsList={setIngredientsList}
        />
      </div>

      {/* Instructions Section */}
      <div className="mt-6">
        <Instructions 
          instructionsList={instructionsList} 
          setInstructionsList={setInstructionsList}
        />
      </div>

    </div>
  );
}