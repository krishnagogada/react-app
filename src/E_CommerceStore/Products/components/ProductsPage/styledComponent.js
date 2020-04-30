import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ECommerceStoreContainer = styled.div `${tw `m-6 mx-auto relative`}max-width:90%`;
const SignOutButton = styled.button `${tw `text-xs p-1 border border-solid border-gray-800 rounded focus:outline-none`}`;
const SizesAndProducts = styled.div `${tw `flex`}`;
const HeaderAndProductList = styled.div `${tw `flex flex-col flex-1`}`;

export { ECommerceStoreContainer, SignOutButton, SizesAndProducts, HeaderAndProductList };
