import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CarsApp = styled.div `${tw`flex flex-col items-center w-full`}`;

const AddCarBackButonsDiv = styled.div `${tw `flex justify-between text-2xl w-3/5`}`;

const AddCarButton = styled.button ` ${tw `border border-solid border-blue-600 bg-blue-600 text-white text-lg p-2 rounded`}`;

const CreatedCar = styled.div `${tw `flex flex-col justify-around w-3/5 h-56`}border-bottom: 1px solid lightgray;`;

const CarId = styled.div `${tw `text-lg`}`;

const StartOrStopDeleteButtonDiv = styled.div `${tw `flex justify-between`}`;

const StartButton = styled.button `${tw `border border-solid border-green-600 bg-green-600 text-white text-lg p-2 rounded`}`;

const StopButton = styled.button `${tw `border border-solid border-red-600 bg-red-600 text-white text-lg p-2 rounded`}`;

const AccelerateApplyBrakeButton = styled.div `${tw `flex justify-between`}`;

const CrossDeleteButton = styled.button `${tw `border-none text-red-600 text-lg p-2 rounded`}`;

const DisabledAccelerateButton = styled.button `${tw `border border-solid border-blue-600 text-blue-600 text-lg p-2 rounded`}`;

const EnabledAccelerateButton = styled.button `${tw `border border-solid border-blue-600 bg-blue-600 text-white text-lg p-2 rounded`}`;

const DisabledApplyBrakeButton = styled.button `${tw `border border-solid border-red-600 text-red-600 text-lg p-2 rounded`}`;

const EnabledApplyBrakeButton = styled.button `${tw `border border-solid border-red-600 bg-red-600 text-white text-lg p-2 rounded`}`;

export { CarsApp, AddCarButton, AddCarBackButonsDiv, CreatedCar, CarId, StartOrStopDeleteButtonDiv, StartButton, StopButton, AccelerateApplyBrakeButton, CrossDeleteButton, DisabledAccelerateButton, EnabledAccelerateButton, DisabledApplyBrakeButton, EnabledApplyBrakeButton };
