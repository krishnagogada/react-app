import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { withRouter } from "react-router-dom";
import { ToDoListApp, ToDoHeading, AddingAndDeleteOfLists, AllLists } from './ToDoListAppStyles.js';
import './ToDoListApp.css';

//-------------------------------------> Footer <------------------------------------

class Footer extends React.Component {

    numberOfItemsLeft = () => {

        let numberOfItems = 0;

        this.props.objects.forEach((eachToDoList) => !eachToDoList.checkBoxStatus ? numberOfItems += 1 : undefined);
        if (numberOfItems === 1) {
            return `1 item left`;
        }
        else {
            return `${numberOfItems} items left`;
        }
    }

    displayClearComplete = () => {

        let numberOfCompletedItems = 0;

        this.props.objects.forEach((eachToDoList) => eachToDoList.checkBoxStatus ? numberOfCompletedItems += 1 : undefined);

        return numberOfCompletedItems;
    }

    render() {
        if (this.props.objects.length > 0) {

            return <div className='footer'>
                        <div className="number-of-items">{this.numberOfItemsLeft()}</div>
                        <div class="all-types-filters">
                            <All updatedSelectedFilter = {this.props.updatedSelectedFilter}/>
                            <Active updatedSelectedFilter = {this.props.updatedSelectedFilter}/>
                            <Completed updatedSelectedFilter = {this.props.updatedSelectedFilter}/>
                        </div>
                        <ClearAll clearAll = {this.props.clearAll} displayClearComplete = {this.displayClearComplete}/>
                    </div>;
        }
        else {
            return null;
        }
    }
}

//------------------------------------------> ToDo Lists <--------------------------------------------

class ToDoListOfItems extends React.Component {

    render() {

        return <div>
                        <div className = 'list-of-tasks'>
                            <CheckBox checkBox = {this.props.checkBoxStatus} id = {this.props.object.listId} status = {this.props.object.checkBoxStatus}/>
                            <ToDoList todoList = {this.props.object.todoItem} updatedToDoList = {this.props.updatedToDoList} completedToDoList = {this.props.object.checkBoxStatus} listId = {this.props.object.listId}/>
                            <DeleteButton removeAListItem = {this.props.removeAListItem} id = {this.props.object.listId}/>
                        </div>
                    </div>;
    }
}

//------------------------------------------> User Input ToDo <---------------------------------------

class UserInputToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toDoListOfObjects: [],
            selectedFilter: 'All'
        };

        this.id = 1;
    }

    checkBoxStatus = (objectId) => {

        console.log(objectId);

        let allToDoLists = this.state.toDoListOfObjects;

        allToDoLists.forEach((eachToDoObject) => {
            if (eachToDoObject.listId === parseInt(objectId)) {
                eachToDoObject.checkBoxStatus = !eachToDoObject.checkBoxStatus;
            }
        });

        this.setState(state => ({
            toDoListOfObjects: allToDoLists
        }));

    }

    addAToDoListObject = (event) => {

        if (event.key === 'Enter') {
            let todo = event.target.value;
            event.target.value = '';

            if (todo === '') {
                alert("Enter any ToDo");
            }
            else {

                let eachToDoList = this.state.toDoListOfObjects;

                eachToDoList.push({ listId: this.id, todoItem: todo, checkBoxStatus: false });

                this.setState(state => ({

                    toDoListOfObjects: eachToDoList

                }));

                this.id += 1;
            }
        }

    }

    removeAListItem = (objectId) => {

        let indexOfObject;
        this.state.toDoListOfObjects.forEach((eachToDoObject) => {
            if (eachToDoObject.listId === parseInt(objectId)) {
                indexOfObject = this.state.toDoListOfObjects.indexOf(eachToDoObject);
            }
        });

        let listOfObjects = this.state.toDoListOfObjects;
        listOfObjects.splice(indexOfObject, 1);

        this.setState(state => ({
            toDoListOfObjects: listOfObjects
        }));

    }

    updatedToDoList = (event, listId) => {

        let listOfObjects = this.state.toDoListOfObjects;
        listOfObjects.forEach((eachToDoObject) => {
            if (eachToDoObject.listId === parseInt(listId)) {
                (eachToDoObject.todoItem = event.target.value);
            }
        });

        this.setState(state => ({
            toDoListOfObjects: listOfObjects
        }));
    }

    clearAll = () => {

        let listOfObjects = this.state.toDoListOfObjects.filter((eachToDoObject) => {
            return (!eachToDoObject.checkBoxStatus);
        });

        this.setState(state => ({
            toDoListOfObjects: listOfObjects
        }));
    }

    updatedSelectedFilter = (filterType) => {

        this.setState(state => ({
            selectedFilter: filterType
        }));

    }

    goBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    renderListOfItems = (filterType) => {

        switch (filterType) {
            case 'All':

                return (this.state.toDoListOfObjects.map((eachToDoList) => <ToDoListOfItems object = {eachToDoList} checkBoxStatus = {this.checkBoxStatus} updatedToDoList = {this.updatedToDoList} removeAListItem = {this.removeAListItem} />));

            case 'Active':

                return (this.state.toDoListOfObjects.map((eachToDoList) => !eachToDoList.checkBoxStatus ? <ToDoListOfItems object = {eachToDoList} checkBoxStatus = {this.checkBoxStatus} updatedToDoList = {this.updatedToDoList} removeAListItem = {this.removeAListItem} /> : null));

            case 'Completed':

                return (this.state.toDoListOfObjects.map((eachToDoList) => eachToDoList.checkBoxStatus ? <ToDoListOfItems object = {eachToDoList} checkBoxStatus = {this.checkBoxStatus} updatedToDoList = {this.updatedToDoList} removeAListItem = {this.removeAListItem} /> : null));

            default:

                return (this.state.toDoListOfObjects.map((eachToDoList) => <ToDoListOfItems object = {eachToDoList} checkBoxStatus = {this.checkBoxStatus} updatedToDoList = {this.updatedToDoList} removeAListItem = {this.removeAListItem} />));

        }

    }

    render() {


        return <ToDoListApp>
        <button className='car-list-go-back-button' onClick={this.goBack}>{<FiArrowLeft/>} Back</button>
                    <ToDoHeading>todo</ToDoHeading>
                    <AddingAndDeleteOfLists>
                        <UserToDoInput addAToDoListObject = {this.addAToDoListObject}/>
                        <AllLists>
                            {this.renderListOfItems(this.state.selectedFilter)}
                        </AllLists>
                        <Footer objects = {this.state.toDoListOfObjects} updatedSelectedFilter = {this.updatedSelectedFilter} clearAll = {this.clearAll}/>
                    </AddingAndDeleteOfLists>
                </ToDoListApp>;
    }
}

//------------------------------------------> Input Types & Buttons <-------------------------------------------

function UserToDoInput(props) {

    return <input className='user-input-todo common-input-styles' type = 'text' placeHolder = 'What needs to be done?' onKeyPress = {(event) => props.addAToDoListObject(event) } />;

}

function CheckBox(props) {

    return <input type='checkbox' defaultChecked = {props.status} className = 'check-box' onClick = {()=>props.checkBox(props.id)}/>;

}

function ToDoList(props) {

    if (props.completedToDoList) {

        return <input type='text' className = 'completed-to-do-list common-input-styles' disabled = {true} value = {props.todoList}/>;

    }
    return <input type = 'text' className='common-input-styles' defaultValue = {props.todoList} onChange = {(event) => props.updatedToDoList(event,props.listId)}/>;
}

function DeleteButton(props) {

    return <button className = 'deleteButton' onClick = {() => props.removeAListItem(props.id)}>X</button>;

}

function All(props) {

    return <button className = "all" onClick = {() => props.updatedSelectedFilter('All')}>All</button>;

}

function Active(props) {

    return <button class="active" onClick = {() => props.updatedSelectedFilter('Active')}>Active</button>;

}

function Completed(props) {

    return <button class="completed" onClick = {() => props.updatedSelectedFilter('Completed')}>Completed</button>;

}

function ClearAll(props) {

    let numberOfCompletedItems = props.displayClearComplete();

    if (numberOfCompletedItems > 0) {
        return <button class="all-clear" onClick = {() => props.clearAll()}>Clear Completed</button>;
    }
    else {
        return <div class="all-clear"></div>;
    }

}

export default withRouter(UserInputToDo);
