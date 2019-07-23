const MAX_ITEMS = 10;
let addAction = document.getElementById('add-action');
let newAction = document.getElementById('new-action');
let actions = document.getElementById('actions');
let warning = document.getElementById('warning');

function listIsFull() {
  let showWarning;
  showWarning = document.createElement('p');
  showWarning.className = 'warning-text';
  showWarning.innerText = 'Maximum item per list are created!';
  warning.appendChild(showWarning);
}

let createNewAction = function (action) {
  let listItem;
  listItem = document.createElement('li');
  listItem.draggable = true;
  listItem.id = 'draggable';
  listItem.className = 'dropZone';
  let checkBox = document.createElement('i');
  checkBox.className = 'material-icons checkbox';
  checkBox.innerHTML = 'check_box_outline_blank';
  let label = document.createElement('label');
  label.innerText = action;
  let input = document.createElement('input');
  input.type = 'text';
  let editButton = document.createElement('i');
  editButton.className = 'material-icons edit';
  editButton.innerHTML = 'edit';
  let deleteButton = document.createElement('i');
  deleteButton.className = 'material-icons delete';
  deleteButton.innerHTML = 'delete';
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(input);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};

function isEmptyInput() {
  let input = document.getElementById('new-action');
  return input.value; // If it's empty
}

let addActionToDocument = function () {
  if (isEmptyInput()) {
    if (newAction.value && document.getElementsByTagName('li').length !== MAX_ITEMS) { //check for the new action line empty
      let listItem = createNewAction(newAction.value);
      if (listItem !== false) {
        actions.appendChild(listItem);
        newAction.value = ''; // Set string with input value empty
        bindActionEvent(listItem, finishAction);
      }
    } else {
      listIsFull();
    }
  }
};

let deleteAction = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let editAction = function () {
  let editButton = this;
  let listItem = this.parentNode;
  let label = listItem.querySelector('label');
  let input = listItem.querySelector('input[type=text]');
  let containsClass = listItem.classList.contains('edit-mode');
  if (containsClass) {
    label.innerText = input.value;
    editButton.innerHTML = 'edit';
  } else {
    input.value = label.innerText;
    editButton.innerHTML = 'save';
  }
  listItem.classList.toggle('edit-mode'); // It's for change class edit-mode back and forth
};

let finishAction = function () {
  let listItem = this.parentNode;
  let checkbox = listItem.querySelector('i.checkbox');
  checkbox.className = 'material-icons checkbox';
  checkbox.innerHTML = 'check_box';
};

let bindActionEvent = function (listItem, checkboxEvent) {
  let checkbox = listItem.querySelector('i.checkbox');
  let editButton = listItem.querySelector('i.edit');
  let deleteButton = listItem.querySelector('i.delete');
  checkbox.onclick = checkboxEvent;
  editButton.onclick = editAction;
  deleteButton.onclick = deleteAction;
};

addAction.onclick = addActionToDocument;

let dragItem = null;

function cancel(event) {
  event.preventDefault()
}

function drag(event) {
  let target = event.target;
  while (target.tagName !== 'LI') {
    target = target.parentNode;
  }
  dragItem = target;
  event.dataTransfer.setData('text/html', dragItem);
}

function drop(event) {
  let target = event.target;
  while (target.tagName !== 'LI') {
    target = target.parentNode;
  }
  if(target.parentElement.tagName === 'UL') {
    target.parentNode.insertBefore(dragItem, target.nextSibling);
  }
}

actions.addEventListener('dragstart', drag);
actions.addEventListener('dragover', cancel);
actions.addEventListener('drop', drop);