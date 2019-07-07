let email = prompt('Enter your e-mail', '');
let password;
let accessToChange;
let emailLength = 6;
let passwordLength = 5;
let User = {
  password: 'UserPass',
  email: 'user@gmail.com',
  isActive: false
};
let Admin = {
  password: 'AdminPass',
  email: 'admin@gmail.com',
  isActive: false
};

if (email === '' || email === null) {
  alert('Canceled');
} else if (email.length < emailLength) {
  alert('I don`t know any emails having name length less than 6 symbols');
} else if (email === User.email || email === Admin.email) {
  password = prompt('Enter your password', '');
} else {
  alert('I don’t know you');
}

if (password !== '' && password !== null) {
  if (password === User.password && email === User.email) {
    User.isActive = true;
  } else if (password === Admin.password && email === Admin.email) {
    Admin.isActive = true;
  } else {
    alert('Wrong password');
  }
} else {
  alert('Canceled');
}

if (User.isActive) {
  accessToChange = confirm('Do you want to change your password?');
  if (accessToChange) {
    let oldPassword = prompt('Write an old password', '');
    if (oldPassword === User.password) {
      let newPassword = prompt('Enter a new password');
      if (newPassword.length < passwordLength) {
        alert('It’s too short password. Sorry');
      } else {
        newPassword = prompt('Enter it again', '') === newPassword ? newPassword : false;
        User.password = newPassword;
      }
      if (!newPassword) {
        alert('You wrote the wrong password');
      } else {
        alert('You have successfully changed your password');
      }
    } else if (oldPassword === '' || oldPassword === null || oldPassword !== User.password) {
      alert('Canceled');
    }
  } else {
    alert('You have failed the change');
  }
}

if (Admin.isActive) {
  accessToChange = confirm('Do you want to change your password?');
  if (accessToChange) {
    let oldPassword = prompt('Write an old password', '');
    if (oldPassword === Admin.password) {
      let newPassword = prompt('Enter a new password');
      if (newPassword.length < passwordLength) {
        alert('It’s too short password. Sorry');
      } else {
        newPassword = prompt('Enter it again', '') === newPassword ? newPassword : false;
        Admin.password = newPassword;
      }
      if (!newPassword) {
        alert('You wrote the wrong password');
      } else {
        alert('You have successfully changed your password');
      }
    } else if (oldPassword === '' || oldPassword === null || oldPassword !== Admin.password){
      alert('Canceled');
    }
  } else {
    alert('You have failed the change');
  }
}