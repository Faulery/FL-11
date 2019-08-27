let showUsersBtn = document.getElementById('showUsers');

showUsersBtn.addEventListener('click', () => {
  getUsers('https://jsonplaceholder.typicode.com/users');
});

function main(users) {
  const list = document.getElementById('users__list');

  users.forEach(user => {
    const listItem = document.createElement('li');
    const userName = document.createElement('span');
    const postsPageLink = document.createElement('a');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    editBtn.addEventListener('click', (e) => {
      const item = e.target;
      const form = document.createElement('form');
      let input = document.createElement('input');
      input.placeholder = 'Enter a new name';
      input.type = 'text';
      form.appendChild(input);
      form.method = 'PUT';
      const list = item.parentNode;
      const id = list.getAttribute('id');
      list.appendChild(form);
      form.onsubmit = (e) => {
        const value = input.value;
        changeUser(id, value);
        e.preventDefault();
      }
    });

    deleteBtn.addEventListener('click', (e) => {
      const item = e.target;
      const itemInList = item.parentNode;
      const list = itemInList.parentNode;
      const userId = itemInList.getAttribute('id') - 1;
      deleteUserFromServer(userId);
      list.removeChild(itemInList);
    });

    showRandomPic(user.id);

    postsPageLink.innerHTML = user.name;

    userName.appendChild(postsPageLink);

    postsPageLink.addEventListener('click', (e) => {
      const target = e.target;
      if (document.getElementById('postsBlock').children.length === 0) {
        let userId = target.parentElement.parentElement.getAttribute('id') - 1; // Does't work on first item
        document.getElementById('users__list').style.display = 'none';
        document.getElementById('postsBlock').style.display = 'block';
        getPosts('https://jsonplaceholder.typicode.com/posts', userId);
      }
    });

    editBtn.innerHTML = 'Edit';
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.id = 'deleteUserBtn';
    editBtn.id = 'editUserBtn';

    listItem.appendChild(userName);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    listItem.setAttribute('id', user.id);

    list.appendChild(listItem);
  });
}

function getUsers(url) {
  loading();
  fetch(url)
    .then(response => response.json())
    .then(users => {
      main(users);
      loaded();
    })
}

function changeUser(id, value) {
  loading();
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
  loaded();
}

function getPosts(url, id) {
  loading();
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(posts => {
      posts = Array.from(posts);
      return posts.filter(userPosts => userPosts.userId === id);
    })
    .then(postsArray => {
      showPosts(postsArray);
      loaded();
    })
}

function showPosts(posts) {
  const postsBlock = document.getElementById('postsBlock');
  const backBtn = document.createElement('button');
  backBtn.innerHTML = 'Back';

  postsBlock.appendChild(backBtn);

  backBtn.addEventListener('click', () => {
    postsBlock.style.display = 'none';
    document.getElementById('users__list').style.display = 'block';
    postsBlock.innerHTML = '';
  });

  for (let i = 0; i < posts.length; i++) {
    const post = document.createElement('section');
    const desc = document.createElement('div');
    const title = document.createElement('h1');
    const text = document.createElement('p');

    post.classList.add('post');

    title.innerHTML = posts[i]['title'];
    text.innerHTML = posts[i]['body'];

    post.appendChild(title);
    post.appendChild(text);

    desc.classList.add('postSection');
    desc.setAttribute('id', posts[i]['id']);

    desc.appendChild(post);
    postsBlock.appendChild(desc);
  }
}

function deleteUserFromServer(userId) {
  loading();
  const request = new XMLHttpRequest();
  request.open('DELETE', `https://jsonplaceholder.typicode.com/users/${userId}`);
  request.send();
  request.onload = function () {
    if (request.status === 200) {
      loaded();
      alert(`User has been deleted, response status: ${request.status}`);
    } else {
      alert(request.statusText);
    }
  }
}

function showRandomPic(userId) {
  loading();
  fetch('https://api.thecatapi.com/v1/images/search?format=json&size=small&mime_types=jpg,png')
    .then(response => response.json())
    .then(image => {
      createImage(image[0]['url'], userId);
      loaded();
    })
}

function createImage(url, userId) {
  const img = document.createElement('img');
  img.setAttribute('src', url);
  const listItem = document.getElementById(userId);
  const textElement = listItem.querySelector('span');
  listItem.insertBefore(img, textElement);
}

function loading() {
  document.getElementById('modal').style.display = 'block';
}

function loaded() {
  document.getElementById('modal').style.display = 'none';
}