import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";

const SignInContainer = styled.div `${tw `flex justify-center items-center h-screen bg-gray-200`}`;
const SiginForm = styled.form `${tw `bg-white p-8 flex flex-col`}`;
const SignInHeading = styled.p `${tw `font-bold text-xl mb-4`}`;
const UserName = styled.input `${tw `w-48 h-10 mb-3 pl-2 border border-solid border-gray-400 focus:outline-none rounded`}`;
const Password = styled.input `${tw `w-48 h-10 mb-3 pl-2 border border-solid border-gray-400 focus:outline-none rounded`}`;
const SubmitButton = styled.button `${tw `w-48 h-10 rounded bg-gray-900 text-white focus:outline-none rounded cursor-pointer`}
                        ${props=>({disabled:props.apiStatus===API_FETCHING?true:false})}`;
const DisplayErrorMessage = styled.p `${tw `text-red-700 mt-2 w-48 text-sm`}`;

export { SignInContainer, SiginForm, SignInHeading, UserName, Password, SubmitButton, DisplayErrorMessage };
