const notas = [
{content: "Estudiar Javascript"}
];

const form = document.querySelector("#new-task-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit (event){
event.preventDefault();

const form = event.target;
const contentNote = form.elements["newNote"].value;

const newNote = {content: contentNote}


if (contentNote == "") {
    alert ("completa el formulario");

} else {
    notas.push (newNote);
}

form.reset();
renderList ();

};

function renderList (){

    const ol = document.querySelector("#note-list");
    ol.innerHTML = "";
    
    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
    const li = createListItem (nota); 
    
    ol.append(li);
    
    }

};


function createListItem (nota) {
    const li = document.createElement ("li");
    
    const span = document.createElement ("span");
    const button = document.createElement ("button");

    span.textContent = nota.content;
    button.textContent = "Eliminar";

button.addEventListener("click", function deleteTask (){
    const index = notas.indexOf (nota);
    notas.splice(index, 1);
    renderList ();
}
);

li.append (span, button);

    return li
};
    
renderList ();
