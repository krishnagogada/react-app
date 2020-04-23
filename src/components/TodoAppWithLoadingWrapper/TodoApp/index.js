import React from 'react';
import { reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import AddToDo from '.././AddTodo/index.js';
import ToDoList from '.././TodoList/index.js';
import ToDoFooter from '.././TodoFooter/index.js';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../../common/NoDataView/index.js';

@inject('todoStoreWithService')
@observer
class ToDoAppWithService extends React.Component {

    constructor(props) {
        super(props);
        const { todoStoreWithService } = this.props;
        todoStoreWithService.getTodoList();
    }

    // componentDidMount() {
    //     this.doNetworkCalls();
    // }

    // doNetworkCalls = () => {
    //     const { todoStoreWithService } = this.props;
    //     todoStoreWithService.getTodoList();
    // }

    // renderTodoList = () => {

    //     const { todoStoreWithService } = this.props;
    //     if (todoStoreWithService.todos.length === 0) {
    //         return <NoDataView/>;
    //     }
    //     else {
    //         return <div>

    //         </div>
    //     }
    // }

    render() {

        const { todoStoreWithService } = this.props;
        reaction(() => (todoStoreWithService.todos.filter((eachObject) => { return !eachObject.isCompleted }).length), (length) => { length === 0 ? setTimeout(() => { alert('congratulations') }) : undefined });

        return (
            <div> 
            <AddToDo todoStore={todoStoreWithService}/>
            <ToDoList todoStore={todoStoreWithService}/>
            <ToDoFooter todoStore={todoStoreWithService}/>
            </div>
        );
    }
}
export default ToDoAppWithService;
