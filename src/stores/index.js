import UserService from '../services/UserService/index.api';
import TodoService from '../services/TodoService/index.api.js';
import CounterStore from './CounterStore';
import UserStore from './UsersStore';
import TodoStoreWithService from './ToDoAppStoreWithService/index.js';

const userStore = new UserStore(new UserService());
const todoStoreWithService = new TodoStoreWithService(new TodoService());
const counterStore = new CounterStore();

export default {
    counterStore,
    userStore,
    todoStoreWithService
};
