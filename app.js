function onReady() {
  let iD = 0;
  const addToDoForm=document.getElementById('addToDoForm');
  let toDos = []; //an array which is why there are [] brackets//

  function renderTheUI(){
    const toDoList=document.getElementById('toDoList');
    toDos.forEach(function(toDo){
      const newLI = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLI.textContent = toDo.title;

      toDoList.appendChild(newLI);
      newLI.appendChild(checkbox);
    })

  }

  function createNewToDo (){
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false,
      iD: ''
    });

    newToDoText.value = '';
    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
