document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const nameInput = document.querySelector('#name');
  nameInput.addEventListener('input', (event) => {
  name = event.target.value;
  });

  const radioInput = document.querySelector('fieldset');
  radioInput.addEventListener('input', (event) =>{
    type = event.target.value
  });

  const weightInput = document.querySelector('#weight');
  weightInput.addEventListener('input', (event) => {
    weight = event.target.value
  });

  const selectCategory = document.querySelector('#category');
  selectCategory.addEventListener('change', (event) => {
    category = event.target.value
  });

  const formInput = document.querySelector('#form');
  formInput.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const weight = event.target.weight.value;
    const radio = event.target.fieldset.value;
    const catagory = event.target.category.value;


    const formDetails = document.createElement('p');
    formDetails.textContent = `You spotted ${name}, which weighs ${weight} which is a ${radio} and you should ${catagory}`;

    const dinosaursSpotted = document.querySelector('#dinosaurs-spotted');
    dinosaursSpotted.appendChild(formDetails);
    formInput.reset();

    const selectCategory = document.querySelector('#btnRemoveData');
    selectCategory.addEventListener('click', (event) => {
      const chosenCategory = document.querySelector('#dinosaurs-spotted')
      chosenCategory.textContent = ''

    })

  });

})
