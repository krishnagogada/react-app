import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
// import { ToDoStore } from '../../../stores/ToDoAppStore/TodoStore';
import ToDo from '.././Todo/index.js';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../../common/NoDataView/index.js';

// type TodoListProps = {
//     todoStore: ToDoStore
// }

@observer
class ToDoList extends React.Component {

    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {
        const { todoStore } = this.props;
        todoStore.getTodoList();
    }

    renderTodoList = observer(() => {

        const { todoStore } = this.props;
        if (todoStore.todos.length === 0) {
            return <NoDataView/>;
        }
        else {

            return todoStore.filteredTodos.map((eachTodo) => {
                return <ToDo key={Math.random()} todo={eachTodo} removeToDo={this.props.todoStore.onRemoveTodo}/>;
            });

        }
    })

    render() {

        const { todoStore } = this.props;

        return (
            <LoadingWrapperWithFailure
                apiStatus={todoStore.getTodoListAPIStatus}
                apiError={todoStore.getTodoListAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderTodoList}
                />

        );
    }
}

export default ToDoList;
