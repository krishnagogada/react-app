import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Loading = styled.img `${tw `w-64 h-64`}`;
const NotFound = styled.div `${tw `flex flex-col`}`;
const Retry = styled.div `${tw `flex flex-col justify-center items-center`}`
const ErrorMessage = styled.div `${tw `text-2xl`}`;
const RetryButton = styled.button `${tw `text-xl px-2 py-1`}`;
const UserInputOnNotFound = styled.input `${tw `text-2xl w-64`}`;
const AddToDoButton = styled.button `${tw `text-xl px-2 py-1`}`;

export { Loading, NotFound, Retry, ErrorMessage, RetryButton, UserInputOnNotFound, AddToDoButton };
