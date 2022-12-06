function show(password){
    alert(`The Password is:\n
    ${password}`);
}
function add(){
    var websiteName = prompt('Enter website name:');
    var pass2 = prompt('Enter password');

    pass.innerHTML += `<div class="card">
    <div class="title">${websiteName}</div>
    <button onclick="show('${pass2}');">Show</button>
    </div>`;

    localStorage.passwords = pass.innerHTML
}

window.onload = function (){
    pass.innerHTML = localStorage.passwords;
}

let pass = document.getElementById('pass');

