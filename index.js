
const errorDisplay = document.getElementById('Error');
const submit = document.getElementById('submit')
const intRequierement = /[0-9]$/;
const form = document.getElementById('form-controle')
const input = document.getElementById('use');
input.setAttribute('maxlength', '8')


form.addEventListener('submit', (e) => {
    if (input.value == "") {
        errorDisplay.innerHTML = '* The form can\'\t be blank'
        errorDisplay.style.color = 'red';
        e.preventDefault();

    } else if (intRequierement.test(input.value) == false) {

        input.style.border = '1px solid red';
        errorDisplay.innerHTML = 'only number are accepted'
        errorDisplay.style.color = 'red';
        e.preventDefault();


    } else {
        errorDisplay.innerHTML = 'form submit successful'
        errorDisplay.style.color = 'green';

    }

})

