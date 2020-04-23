import React from 'react';
import { observer } from 'mobx-react';
// import TodoModel from '../../../stores/models/ToDoModel/TodoModel';

// type TodoListProps = {
//     todo: TodoModel,
//     removeToDo: Function
// }

@observer
class ToDo extends React.Component {

    onCompleteToDo = () => {
        this.props.todo.onCompleteToDo();
    }
    removeToDo = () => {
        this.props.removeToDo(this.props.todo.id);
    }
    onUpdateToDoTitle = (event) => {
        this.props.todo.onUpdateToDoTitle(event.target.value);
    }
    render() {
        return <div key={this.props.todo.id}>
                    <div className = 'list-of-tasks'>
                        <input type='checkbox' defaultChecked ={this.props.todo.isCompleted} onClick = {this.onCompleteToDo}/>
                        <input type='text' defaultValue = {this.props.todo.title} style={{textDecoration:(this.props.todo.isCompleted)?"line-through":"none"}} disabled={(this.props.todo.isCompleted)?true:false} onChange={this.onUpdateToDoTitle}/>
                        <button onClick = {this.removeToDo}>X</button>
                    </div>
                </div>;
    }
}
export default ToDo;
