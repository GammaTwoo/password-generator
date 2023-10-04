// Creating a bunch of objects to represent password criteria
let length = {title: "Password Length", class: "options", id: "length", inputType: "number", inputResult: ""}
let upper = {title: "Uppercase Characters", class: "options", id: "uppercase", inputType: "checkbox", inputResult: ""}
let lower = {title: "Lowercase Characters", class: "options", id: "lowercase", inputType: "checkbox", inputResult: ""}
let numbers = {title: "Numbers", class: "options", id: "numbers", inputType: "checkbox", inputResult: ""}
let specialCharacters = {title: "Special Characters", class: "options", id: "special-characters", inputType: "checkbox", inputResult: ""}

// Puts those objects into an array
let formArray = [length, upper, lower, numbers, specialCharacters]

// expand central box + make options
generate.addEventListener("click", formHandler)

let formHandled

function formHandler() {
  // creates div with class form that will contain the options
  const form = document.createElement("div");
  form.setAttribute("class", "form");
  form.setAttribute("id", "passwordForm")

  // replaces the password box with the form div
  const parent = document.getElementById("card-body");
  const child = document.getElementById("password");
  parent.replaceChild(form, child);

  // Iterates over the array to create the form
  for (var i = 0; i < formArray.length ; i++){

    // Creates a div for each object
    const options = document.createElement("div")
    options.setAttribute("class", "options")
    options.setAttribute("id", `${formArray[i].id}`)

    // creates a header element and puts it into the divs
    const optionTitles = document.createElement("h3")
    const node = document.createTextNode(`${formArray[i].title}`)
    optionTitles.appendChild(node)

    // puts the divs into the form div
    options.appendChild(optionTitles)
    form.appendChild(options)

    // Creates an input field with type expressed in objects (the first option is a different input than the rest)
    if (formArray[i].inputType === "number") {
      const formInput = document.createElement("input")
      formInput.setAttribute("type", `${formArray[i].inputType}`)
      const formDiv = document.getElementById(`${formArray[i].id}`)
      formDiv.appendChild(formInput)
    } else {
      // Creates a label with a class and inserts it into the form div
      const optionLabel = document.createElement("label")
      optionLabel.setAttribute("class", "switch")
      const formDiv = document.getElementById(`${formArray[i].id}`)
      formDiv.appendChild(optionLabel)

      // Creates an input and inserts it into the label
      const optionToggle = document.createElement("input")
      optionToggle.setAttribute("type", `${formArray[i].inputType}`)
      optionLabel.appendChild(optionToggle)
      
      // Creates a span and inserts it into the label after the input
      const btnSpan = document.createElement("span")
      btnSpan.setAttribute("class", "slider round")
      optionLabel.appendChild(btnSpan)
      // Done this way so it can be a switch instead of a checkbox
      
    }
  }
  formHandled = true
  return;
};



// store inputs

// collapse box/put the old info back

// print password


/* Pseudo-code
Generate Password button
  on click
    open window
      multiple options
        length
          8 - 128
        character types
          lower
          upper
          numeric
          special
      Validate input (at least one character type should be selected)
    Generate Passwod
  Write generated password to the page

  */