// KARUGU ANTHONY MUTURI
// SCT211-0016/2022

// MWANGI HILDA WAIRIMU
// SCT211-0026/2022

// KIMBERLY WANGARI NJOROGE
// SCT211-0060/2022

// KIMANI OWEN MWANGI
// SCT211-0591/2021

// ROWE PEARL ROWENA
// SCT211-0678/2021

document.addEventListener('DOMContentLoaded', function() {

    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    submit.disabled = true;

    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {

        const item = newTask.value;

        const list = document.createElement('li');
        list.innerHTML = item;

        document.querySelector('#tasks').append(list);

        newTask.value = '';

        submit.disabled = true;

        return false;
    }
});
