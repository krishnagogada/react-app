import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { withRouter } from "react-router-dom";
import { CarsApp, AddCarButton, AddCarBackButonsDiv, CreatedCar, CarId, StartOrStopDeleteButtonDiv, StartButton, StopButton, AccelerateApplyBrakeButton, CrossDeleteButton, DisabledAccelerateButton, EnabledAccelerateButton, DisabledApplyBrakeButton, EnabledApplyBrakeButton } from './CarListAppStyles.js';

class Car extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            status: 'Stopped',
            speed: 0
        };
        this.carId = props.carId;
        this.removeCarFromCarsList = props.removeCarFromCarsList;
    }

    onStartOrStop = () => {

        this.setState(state => ({

            status: state.status === 'Stopped' ? 'Running' : 'Stopped'

        }));

        this.setState(state => ({

            speed: 0

        }));
    }

    onApplyBrake = () => {

        this.setState(state => ({

            speed: this.state.speed - 10

        }));

    }

    onAccelerate = () => {

        let stateSpeed = this.state.speed;
        this.setState(state => ({

            speed: stateSpeed + 10

        }));
        if (this.state.speed < 0) {
            this.setState(state => ({

                speed: 0

            }));
        }
    }

    displayStatusText = () => {

        if (this.state.speed <= 0 || this.state.status === 'Stopped') {
            this.displayStatus = this.state.status;
        }
        else {
            this.displayStatus = `Running with speed ${this.state.speed}KPMH`;
        }

    }

    render() {
        this.displayStatusText();
        let Element = <CreatedCar>
                        <CarId>Car Id : {this.carId}</CarId>
                        <StartOrStopDeleteButtonDiv>
                            <StartOrStopButton onClick = {this.onStartOrStop} status = {this.state.status} />
                            <DeleteButton carId={this.carId} removeCarFromCarsList={this.removeCarFromCarsList} />
                        </StartOrStopDeleteButtonDiv>
                        <Status value = {this.displayStatus}/>
                        <AccelerateApplyBrakeButton>
                            <AccelerateButton onClick = {this.onAccelerate} status = {this.state.status}/>
                            <ApplyBrakesButton onClick = {this.onApplyBrake} speed = {this.state.speed}/>
                        </AccelerateApplyBrakeButton>
                    </CreatedCar>;

        return Element;
    }
}

class CarsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsId: [1]
        };

        this.id = 2;
        this.newAddedCars = '';
    }
    addCarToCarsList = () => {

        let listOfCarsId = this.state.carsId;

        listOfCarsId.push(this.id);

        this.setState(state => ({

            carsId: listOfCarsId

        }));

        this.id += 1;

    }

    removeCarFromCarsList = (carId) => {

        let listOfCarsId = this.state.carsId;
        let indexOfCarId = listOfCarsId.indexOf(carId);

        listOfCarsId.splice(indexOfCarId, 1);

        this.setState(state => ({
            carsId: listOfCarsId
        }));
    }

    goBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    renderCarsList = () => {
        return this.state.carsId.map((Id) =>
            <Car key = {Id.toString()} carId = {Id} removeCarFromCarsList = {this.removeCarFromCarsList}/>
        );
    }

    render() {
        return (
            <CarsApp>
            
                <AddCarBackButonsDiv> 
                    <button className='car-list-go-back-button' onClick={this.goBack}>{<FiArrowLeft/>}</button>
                    <AddCar ListItems={this.addCarToCarsList}/>
                </AddCarBackButonsDiv> 
                
            {this.renderCarsList()}                     
       </CarsApp>);
    }
}

//------------------>BUTTONS<-----------------

function AddCar(props) {

    return <AddCarButton onClick={props.ListItems}>Add Car</AddCarButton>;
}

function StartOrStopButton(props) {

    return props.status === 'Stopped' ? <StartButton onClick = {props.onClick} >Start</StartButton> : <StopButton onClick = {props.onClick} >Stop</StopButton>;

}

function DeleteButton(props) {

    return <CrossDeleteButton onClick = { () => props.removeCarFromCarsList(props.carId)}>X</CrossDeleteButton>;

}

function Status(props) {

    return <div>{props.value}</div>;

}

function AccelerateButton(props) {

    if (props.status === 'Stopped') {
        return <DisabledAccelerateButton disabled = {true} onClick = {props.onClick} >Accelerate</DisabledAccelerateButton>;
    }
    return <EnabledAccelerateButton onClick = {props.onClick} >Accelerate</EnabledAccelerateButton>;

}

function ApplyBrakesButton(props) {

    if (props.speed <= 0) {

        return <DisabledApplyBrakeButton disabled = {true} onClick = {props.onClick} >Apply Brake</DisabledApplyBrakeButton>;
    }
    return <EnabledApplyBrakeButton onClick = {props.onClick} >Apply Brake</EnabledApplyBrakeButton>;

}
export default withRouter(CarsList);
