import {setUsers, deleteUser, filterUsers} from './actions/usersActions';
import {getUsers} from './connect';
import data from './data';

class App {
    constructor(store) {
        this.store = store;
        this.numberToDisplay = 5;
        this.loadMore = this.loadMore.bind(this);
        this.store.dispatch(setUsers(data));
    }

    init() {
        this.allUsers = getUsers(this.store);
        this.render();
        if (this.allUsers.length <= this.numberToDisplay) {
            document.querySelector('.load-button').classList.remove('visible');
            document.querySelector('.load-button').classList.add('hidden');
        }
        if (!this.allUsers.length) {
            document.querySelector('.users-table').remove();
            const alert = document.createElement('div');
            const root = document.querySelector('#root');
            const loadForm = document.querySelector('.load');
            alert.innerText = 'No users are found';
            alert.className = 'alert';
            root.insertBefore(alert, loadForm);
        }
        document.querySelector('.load-button').addEventListener('click', this.loadMore);
        document.querySelectorAll('.users-table-data-remove-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => this.removeUser(e));
        });
        document.querySelector('.search-form-input').addEventListener('change', (e) => this.filter(e.target.value));
    }

    render() {
        let output = '';
        this.allUsers.slice(0, this.numberToDisplay).forEach((user) => {
            output += `
                <tr class="users-table-data" id=${user.id}>
                    <td>
                        <img src=${user.picture} alt=${user.name}>
                    </td>
                    <td>${user.name}</td>
                    <td>${user.location}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.timezone}</td>
                    <td>
                        <button class="users-table-data-remove-btn">
                            Remove
                        </button>
                    </td>
                </tr>`;
        });
        document.querySelector('#root').innerHTML = `
            <form class="search-form">
                <label class="search-form-label" htmlFor="search">
                    Search by name:
                </label>
                <input
                    class="search-form-input"
                    id="search"
                    type="search"
                    placeholder="Enter user name..."
                />
             </form>
            <table class="users-table">
                <thead class="users-table-header">
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Timezone</th>
                        <th>Actions</th>
                    </tr>
                    <tr class="users-table-header-dummy-block"></tr>
                </thead>
                <tbody>
                    ${output}
                </tbody>
            </table>
            <div class="load">
                <div class="load-info">
                    Displayed 
                    ${this.allUsers.length > this.numberToDisplay ? this.numberToDisplay : this.allUsers.length} 
                    users out of ${this.allUsers.length}
                </div>
                <button class="load-button visible">
                    LOAD MORE
                </button>
            </div>`;
    }

    loadMore() {
        if (this.allUsers.length - this.numberToDisplay < 5) {
            this.numberToDisplay += this.allUsers.length - this.numberToDisplay;
            this.init();
            return;
        }
        this.numberToDisplay += 5;
        this.init();
    }

    removeUser(e) {
        this.store.dispatch(deleteUser(e.target.parentElement.parentElement.id));
        this.init();
    }

    filter(text) {
        this.store.dispatch(filterUsers(text));
        this.init();
    }
}

export default App;