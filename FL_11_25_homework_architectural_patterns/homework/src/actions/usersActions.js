import {SET_USERS, DELETE_USER, FILTER_USERS} from './types';

export const setUsers = (data) => ({type: SET_USERS, payload: data});

export const deleteUser = (id) => ({type: DELETE_USER, payload: id});

export const filterUsers = (text) => ({type: FILTER_USERS, payload: text});