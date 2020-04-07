import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ToDoListApp = styled.div `${tw `flex flex-col items-center pb-12 m-16`}
    background-color: #f5f5f5;`;

const ToDoHeading = styled.div `${tw `text-100px font-hairline font-sans text-center`}color: rgba(175, 47, 47, 0.2)`;

const AddingAndDeleteOfLists = styled.div `${tw `flex flex-col w-3/5`}box-shadow: 5px 10px 18px #888888`;

const AllLists = styled.div `${tw `w-full bg-white`}color: #4d4d4d`;


export { ToDoListApp, ToDoHeading, AddingAndDeleteOfLists, AllLists };
