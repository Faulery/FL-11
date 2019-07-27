const rootNode = document.getElementById('root');
let todoItems = [];
let storage = {
  add(description) {
    let id = 'id_' + +new Date();
    let item = {id, description, isDone: false};
    todoItems.push(item);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    return todoItems;
  },

  getItems() {
    return JSON.parse(localStorage.getItem('todoItems'));
  },

  setAsDoneById(id) {
    const updatedList = this.getItems().map(item => {
      if (item.id === id) {
        item.isDone = true;
      }

      return item;
    });
    localStorage.setItem('todoItems', JSON.stringify(updatedList));

    return todoItems;
  },

  getStatus(value) {
    return this.getItems().filter(item => item.isDone === value);
  },

  getSorted() {
    return this.getStatus(false).concat(this.getStatus(true));
  },

  editDescription(id, description) {
    const updatedList = this.getItems().map(item => {
      if (item.id === id) {
        item.description = description;
      }

      return item;
    });
    localStorage.setItem('todoItems', JSON.stringify(updatedList));

    return todoItems;
  },

  removeById(id) {
    const updatedList = this.getItems().filter(item => item.id !== id);
    localStorage.setItem('todoItems', JSON.stringify(updatedList));

    return todoItems;
  }
};


window.onload = window.onhashchange = () => {
  if (localStorage.getItem('todoItems')) {
    todoItems = storage.getSorted();
  }

  if (window.location.hash === '#/add') {
    document.title = 'Add new task';
    rootNode.innerHTML = '';
    rootNode.appendChild(add());
  } else if (window.location.hash.includes('/modify')) {
    const id = window.location.hash.slice(window.location.hash.lastIndexOf('/') + 1);
    const item = JSON.parse(localStorage.getItem('todoItems')).find(item => item.id === id);
    document.title = 'Modify item';
    rootNode.innerHTML = '';
    rootNode.appendChild(modify(item));
  } else {
    document.title = 'Main page';
    rootNode.innerHTML = '';
    rootNode.appendChild(main(todoItems));
  }
};

function setAttributes(elem, attributes){
  for(let key in attributes){
    if (attributes.hasOwnProperty(key)){
      elem.setAttribute(key, attributes[key]);
    }
  }
}

function main(todoItems) {
  const section = document.createElement('section');
  setAttributes(section, {id: 'main_section'});

  const header = document.createElement('h1');
  const headText = document.createTextNode('Simple TODO application');
  header.appendChild(headText);

  const addNewTaskBtn = document.createElement('button');
  setAttributes(addNewTaskBtn, {id: 'add_new_task_btn'});
  const addBtnText = document.createTextNode('Add new task');
  addNewTaskBtn.appendChild(addBtnText);

  const todoList = document.createElement('ul');
  setAttributes(todoList, {id: 'todo-list'});

  const initialList = document.createElement('p');
  setAttributes(initialList, {class: 'empty_todo'});
  const initialText = document.createTextNode('TODO is empty');
  initialList.appendChild(initialText);

  addNewTaskBtn.onclick = () => {
    window.location.hash = '/add';
  };

  section.appendChild(header);
  section.appendChild(addNewTaskBtn);
  section.appendChild(todoList);
  section.appendChild(initialList);

  if (todoItems.length) {
    for (let item of todoItems) {
      const li = document.createElement('li');
      setAttributes(li, {id: item.id});

      const checkbox = document.createElement('button');
      setAttributes(checkbox, {class: item.isDone ? 'checkbox_checked' : 'checkbox_empty'});

      const todoText = document.createElement('button');
      setAttributes(todoText, {class: 'todo_text', title: 'Click to edit'});
      const todoTextDesc = document.createTextNode(item.description);
      todoText.appendChild(todoTextDesc);

      const removeItem = document.createElement('button');
      setAttributes(removeItem, {class: 'remove_item'});

      checkbox.onclick = () => {
        if (checkbox.className === 'checkbox_empty') {
          checkbox.className = 'checkbox_checked';
          storage.setAsDoneById(item.id);
          location.reload();
          todoList.appendChild(li);
        }
      };

      todoText.onclick = () => {
        if (item.isDone) {
          window.location.hash = '';
        } else {
          window.location.hash = `#/modify/${item.id}`;
        }
      };

      removeItem.onclick = () => {
        li.remove();
        storage.removeById(item.id);
      };

      li.appendChild(checkbox);
      li.appendChild(todoText);
      li.appendChild(removeItem);

      todoList.appendChild(li);
    }
  }

  return section;
}

function add() {
  let section = document.createElement('section');
  setAttributes(section, {id: 'add_screen'});

  let header = document.createElement('h1');
  header.innerText = 'Add task';

  let input = document.createElement('input');
  setAttributes(input, {type: 'text', placeholder: 'Task description'});

  let footer = document.createElement('footer');

  let cancelBtn = document.createElement('button');
  setAttributes(cancelBtn, {class: 'cancel_btn'});
  let cancelText = document.createTextNode('Cancel');
  cancelBtn.appendChild(cancelText);

  let saveBtn = document.createElement('button');
  setAttributes(saveBtn, {class: 'save_btn', disabled: 'true'});
  let saveText = document.createTextNode('Save changes');
  saveBtn.appendChild(saveText);

  input.onchange = input.onkeyup = () => {
    let inputValue = input.value.trim();
    saveBtn.disabled = !inputValue;

    if (inputValue && event.code === 'Enter') {
      saveBtn.click();
    }
  };

  cancelBtn.onclick = () => {
    window.location.hash = '';
  };

  saveBtn.onclick = () => {
    storage.add(input.value);
    window.location.hash = '';
  };

  footer.appendChild(cancelBtn);
  footer.appendChild(saveBtn);

  section.appendChild(header);
  section.appendChild(input);
  section.appendChild(footer);

  return section;
}

function modify(item) {
  const section = this.add();

  section.querySelector('h1').textContent = 'Modify item';
  section.querySelector('input').value = item.description;
  section.querySelector('.save_btn').onclick = () => {
    storage.editDescription(item.id, section.querySelector('input').value);
    window.location.hash = '';
  };

  return section;
}