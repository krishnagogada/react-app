import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CounterApp = styled.div `${tw `flex flex-col items-center justify-center h-screen`}`;
const CounterHeading = styled.div `${tw `text-5xl text-bold`}`;
const UserInputAndButtons = styled.div `${tw `flex`}`;
const IncreamentButton = styled.button `${tw `p-2 border border-solid border-blue-700 bg-blue-700 text-white p-3 m-4`}`;
const UserCounterInput = styled.input `${tw `w-48 m-4 text-center text-2xl border border-solid border-orange-400`}`;
const DecreamentButton = styled.button `${tw `p-2 border border-solid border-blue-700 bg-blue-700 text-white p-3 m-4`}`;

export { CounterApp, CounterHeading, UserInputAndButtons, IncreamentButton, UserCounterInput, DecreamentButton };
