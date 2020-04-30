import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const MenuContainer = styled.div `${tw `fixed top-0 left-0 z-10`}`;
const MeanuIcon = styled.div `${tw `text-xl`}`;
const MenuContainerWhenOpen = styled.div `${tw `bg-gray-800 h-screen text-white p-10`}width:400px`;
const CloseButtonForMenu = styled.button `${tw `text-xl right-0 absolute`}`;
const HomeComponent = styled.div `${tw `text-xl`}`;

export { MenuContainer, MeanuIcon, MenuContainerWhenOpen, CloseButtonForMenu, HomeComponent };
