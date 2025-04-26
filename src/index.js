function displayRecipe(response){
new Typewriter('#recipe', {
  strings: response.data.answer,
  autoStart: true,
  cursor:"",
  delay:5

});
}


function recipeGenerate(event){
event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "o55206ae8847051e1ff334btaf13bafe";
let prompt = `Generate a short recipe about ${instructionsInput.value}`;
let context = "user instructions: You are an expert recipe writer and you love to create short easy recipes. Your mission is to generate a 6 line recipe in basic HTML with a <br/> after each line. Do not show the html before or after the recipe. Do not add a title. Just the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe only. Make sure to follow the user instructions";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `<div class="generating">Generating a recipe with ${instructionsInput.value}</div>`;

axios.get(apiUrl).then(displayRecipe);


}


let recipeFormElement= document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit",recipeGenerate);