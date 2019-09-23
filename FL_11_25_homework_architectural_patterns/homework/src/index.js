import './style.scss';
import {createStore} from 'redux';
import usersReducer from './reducer/usersReducer';
import App from './App';

const state = {};

const store = createStore(
    usersReducer,
    state,
);

const myApp = new App(store);

myApp.init();


// ** Here you can pass store down to your components
// ** and initialize them, like in example below

// ** import {createStore} from 'redux';
// ** import myTestReducer from './reducers/my_test_reducer.js';
// ** import MyTestComponent from './components/my_test_component';

// ** const store = createStore(myTestReducer);

// ** const testComponent = new MyTestComponent(store);

// ** testComponent.init()
