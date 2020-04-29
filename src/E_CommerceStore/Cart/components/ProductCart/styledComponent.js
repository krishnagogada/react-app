import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CartContainer = styled.div `${tw `top-0 right-0 fixed z-10 `}`;
const CartImageAndNumberOFProducts = styled.div `${tw `bg-gray-800 p-2 cursor-pointer`} height:56px`;
const NumberOfProductsInCart = styled.p `${tw `text-center text-sm text-yellow-600 relative -mt-8 -mr-2`}`;
const CartContainerWhenOpen = styled.div `${tw `flex relative h-screen`} width:456px`;
const ButtonToHideCart = styled.button `${tw `h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none`}`;
const CartListContainer = styled.div `${tw `p-4 bg-gray-800 flex flex-col w-full`}`;
const CartImageAndNumberOFProductsWhenOpen = styled.div `${tw `flex items-center justify-center`}`;
const StylesForBothCartImageAndNumberOfProducts = styled.div `${tw `h-10 mr-4`}`;
const NumberOfProductsInCartWhenOpen = styled.p `${tw `text-center text-sm text-yellow-600 relative -mt-8 -mr-2`}`;
const CartHeading = styled.p `${tw `text-white font-bold text-xl`}`;
const TotalCartListStylesContainer = styled.div `${tw `mt-8 overflow-y-auto flex-1`}`;
const MessageToAddItems = styled.p `${tw `text-white text-sm my-auto h-3/4 flex items-center justify-center`}`;
const SubTotalAndCheckOutContainer = styled.div `${tw `absolute bottom-0 right-0 p-4 w-11/12 bg-gray-800 shadow-inner`}`;


export {
    CartContainer,
    CartImageAndNumberOFProducts,
    NumberOfProductsInCart,
    CartContainerWhenOpen,
    ButtonToHideCart,
    CartListContainer,
    CartImageAndNumberOFProductsWhenOpen,
    StylesForBothCartImageAndNumberOfProducts,
    NumberOfProductsInCartWhenOpen,
    CartHeading,
    TotalCartListStylesContainer,
    MessageToAddItems,
    SubTotalAndCheckOutContainer
};
