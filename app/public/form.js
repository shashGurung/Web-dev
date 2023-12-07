let form = document.querySelector('#form')
form.addEventListener('submit', processSubmit)
let serializedData;

function createData(firstname ,lastname, email, comments){
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        comments: comments
    }

    serializedData = JSON.stringify(data);
    return serializedData;
}
    
function getFetchOptions(data){
    const fetchOptions ={
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }
    return fetchOptions;
}

function processSubmit(e){
    e.preventDefault();

    const firstname = form.querySelector('#firstname').value
    const lastname = form.querySelector('#lastname').value
    const email = form.querySelector('#email').value
    const comments = form.querySelector('#comments').value

    const data = createData(firstname, lastname, email, comments)

    fetch('http://localhost:3000/form', getFetchOptions(data))
    .then(onResponse)
    .then(onTextReady);
}


function onResponse(response){
    return response.text();
}

function onTextReady(text){
    let confirmation = document.querySelector('#confirmation-text')
    confirmation.style.cssText = "color: green;\nfont-size: small;";
    confirmation.textContent = "Contact details have been recorded!";
    let formresults = document.querySelector('#form-results')
    formresults.style.cssText = "color: red;";
    formresults.textContent = text;
}

