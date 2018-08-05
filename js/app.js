document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const nameInput = document.querySelector('#name');
  nameInput.addEventListener('input', (event) => {
  let name = event.target.value;
  });

  const radioInput = document.querySelector('#type');
  radioInput.addEventListener('input', (event) =>{
  let  type = event.target.value
  });

  const weightInput = document.querySelector('#weight');
  weightInput.addEventListener('input', (event) => {
  let weight = event.target.value
  });

  const selectCategory = document.querySelector('#category');
  selectCategory.addEventListener('change', (event) => {
  let category = event.target.value
  });

  const formInput = document.querySelector('#form');
  formInput.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const weight = event.target.weight.value;
    const type = event.target.type.value;
    const catagory = event.target.category.value;


    const formDetails = document.createElement('p');
    formDetails.textContent = `You spotted ${name}, which weighs ${weight} and is a ${type} and you should ${catagory}`;

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
