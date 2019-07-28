const rootNode = document.getElementById('root');
const alertTimeout = 3000;
let actions = [];
let storage = {
  add(description) {
    const ID = 'id_' + +new Date();
    let item = {id: ID, description, isDone: false};
    actions.push(item);
    localStorage.setItem('actions', JSON.stringify(actions));

    return actions;
  },

  getItems() {
    return JSON.parse(localStorage.getItem('actions'));
  },

  setAsDoneById(id) {
    let updatedList = this.getItems().map(item => {
      if (item.id === id) {
        item.isDone = true;
      }

      return item;
    });
    localStorage.setItem('actions', JSON.stringify(updatedList));

    return actions;
  },

  setAsUnDoneById(id) {
    let updatedList = this.getItems().map(item => {
      if (item.id === id) {
        item.isDone = false;
      }

      return item;
    });
    localStorage.setItem('actions', JSON.stringify(updatedList));

    return actions;
  },

  getStatus(value) {
    return this.getItems().filter(item => item.isDone === value);
  },

  getSorted() {
    return this.getStatus(false).concat(this.getStatus(true));
  },

  editDescription(id, description) {
    let updatedList = this.getItems().map(item => {
      if (item.id === id) {
        item.description = description;
      }

      return item;
    });
    localStorage.setItem('actions', JSON.stringify(updatedList));

    return actions;
  },

  removeById(id) {
    let updatedList = this.getItems().filter(item => item.id !== id);
    localStorage.setItem('actions', JSON.stringify(updatedList));

    return actions;
  }
};

window.onload = window.onhashchange = () => {
  if (localStorage.getItem('actions')) {
    actions = storage.getSorted();
  }

  if (window.location.hash === '#/add') {
    document.title = 'Add new task';
    rootNode.innerHTML = '';
    rootNode.appendChild(add());
  } else if (window.location.hash.includes('/modify')) {
    let id = window.location.hash.slice(window.location.hash.lastIndexOf('/') + 1);
    let item = JSON.parse(localStorage.getItem('actions')).find(item => item.id === id);
    document.title = 'Modify item';
    rootNode.innerHTML = '';
    rootNode.appendChild(modify(item));
  } else {
    document.title = 'Main page';
    rootNode.innerHTML = '';
    rootNode.appendChild(main(actions));
  }
};

function setAttributes(elem, attributes) {
  for (let key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      elem.setAttribute(key, attributes[key]);
    }
  }
}

function main(todoItems) {
  let view = document.createElement('section');
  setAttributes(view, {id: 'main_section'});

  let header = document.createElement('h1');
  header.innerText = 'Simple TODO application';

  let addAction = document.createElement('button');
  setAttributes(addAction, {id: 'add_new_task_btn'});
  addAction.innerText = 'Add new task';

  let todoList = document.createElement('ul');
  setAttributes(todoList, {id: 'todo_list'});

  let init = document.createElement('p');
  setAttributes(init, {class: 'empty_todo'});
  init.innerText = 'TODO is empty';

  addAction.onclick = () => {
    window.location.hash = '/add';
  };

  view.appendChild(header);
  view.appendChild(addAction);
  view.appendChild(todoList);
  view.appendChild(init);

  if (todoItems.length) {
    for (let item of todoItems) {
      let li = document.createElement('li');
      setAttributes(li, {id: item.id});

      let checkbox = document.createElement('button');
      setAttributes(checkbox, {class: item.isDone ? 'checked' : 'unchecked'});

      let todoText = document.createElement('button');
      setAttributes(todoText, {class: 'todo_text', title: 'Click to edit'});
      todoText.innerText = item.description;

      let removeAction = document.createElement('button');
      setAttributes(removeAction, {class: 'remove_item'});

      checkbox.onclick = () => {
        if (checkbox.className === 'unchecked') {
          checkbox.className = 'checked';
          storage.setAsDoneById(item.id);
          location.reload();
          todoList.appendChild(li);
        } else {
          checkbox.className = 'unchecked';
          storage.setAsUnDoneById(item.id);
          location.reload();
          todoList.appendChild(li);
        }
      };

      todoText.onclick = () => {
        if (item.isDone) {
          window.location.hash = '';
          let block = document.createElement('div');
          setAttributes(block, {class: 'alert'});
          block.innerHTML = '<p>You can not edit already done action</p>';
          rootNode.appendChild(block);
          setTimeout(function () {
            setAttributes(block, {class: 'hide'});
          }, alertTimeout);
        } else {
          window.location.hash = `#/modify/${item.id}`;
        }
      };

      removeAction.onclick = () => {
        li.remove();
        storage.removeById(item.id);
      };

      li.appendChild(checkbox);
      li.appendChild(todoText);
      li.appendChild(removeAction);

      todoList.appendChild(li);
    }
  }

  return view;
}

function add() {
  let view = document.createElement('section');
  setAttributes(view, {id: 'add_screen'});

  let header = document.createElement('h1');
  header.innerText = 'Add task';

  let input = document.createElement('input');
  setAttributes(input, {type: 'text', placeholder: 'Task description'});

  let footer = document.createElement('footer');

  let cancel = document.createElement('button');
  setAttributes(cancel, {class: 'cancel_btn'});
  cancel.innerText = 'Cancel';

  let save = document.createElement('button');
  setAttributes(save, {class: 'save_btn', disabled: 'true'});
  save.innerText = 'Save';

  input.onchange = input.onkeyup = () => {
    let inputValue = input.value.trim();
    save.disabled = !inputValue;

    if (inputValue && event.code === 'Enter') {
      save.click();
    }
  };

  cancel.onclick = () => {
    window.location.hash = '';
  };

  save.onclick = () => {
    storage.add(input.value);
    window.location.hash = '';
  };

  footer.appendChild(cancel);
  footer.appendChild(save);

  view.appendChild(header);
  view.appendChild(input);
  view.appendChild(footer);

  return view;
}

function modify(item) {
  let view = this.add();

  view.querySelector('h1').textContent = 'Modify item';
  view.querySelector('input').value = item.description;
  view.querySelector('.save_btn').onclick = () => {
    storage.editDescription(item.id, view.querySelector('input').value);
    window.location.hash = '';
  };

  return view;
}