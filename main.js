document.querySelectorAll(`button`).forEach((btn) => {
  btn.style.cursor = "pointer";
});

// Set initial font-size
document.querySelectorAll(`li`).forEach((element) => {
  element.style.fontSize = `10px`;
});

//------------------------------------------------------------------------- 'FOR' FUNCTION VERSION ---

{
  // Elements variables
  const btn = document.querySelector(`#btn1`);
  const elements = document.querySelectorAll(`#list1 li`);

  // Function variable
  let fontSize = 10;

  // Main function
  const showElements = () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";

      if (fontSize > 10) {
        elements[i].style.fontSize = `${fontSize}px`;
      }
    }

    fontSize++;
  };

  // Listener
  btn.addEventListener(`click`, showElements);
}

//------------------------------------------------------------------------- 'FOR EACH' FUNCTION VERSION ---

{
  // Elements variables
  const btn = document.querySelector(`#btn2`);
  const elements = document.querySelectorAll(`#list2 li`);

  // Function variable
  let fontSize = 10;

  // Main function
  const showElements = () => {
    elements.forEach((element) => {
      element.style.display = "block";
    });

    if (fontSize > 10) {
      elements.forEach((element) => {
        element.style.fontSize = `${fontSize}px`;
      });
    }

    fontSize++;
  };

  // Listener
  btn.addEventListener(`click`, showElements);
}
