import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Login = styled.div `${tw `flex flex-col justify-center items-center min-h-screen`}`;
const UserName = styled.input `${tw `mb-2`}`;
const Password = styled.input `${tw `mb-2`}`;
const LoginButton = styled.button `${tw `bg-blue-400 text-white px-2 py-1`}`;
export { Login, UserName, Password, LoginButton };
