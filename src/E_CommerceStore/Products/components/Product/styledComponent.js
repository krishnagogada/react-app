import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductContainer = styled.div `${tw `flex flex-col justify-between md:w-46% lg:w-30% xl:w-23% border border-solid border-transparent hover:border-gray-400 m-2 items-center p-2 relative`}`;
const FreeShipping = styled.p `${tw `text-white bg-black text-xs p-1 top-0 right-0 absolute`}`;
const ProductImage = styled.img `${tw `w-4/5 object-contain mb-2`}`;
const ProductTitle = styled.p `${tw `h-12 text-center`}`;
const DividedLine = styled.div `${tw `w-4 border-t-2 rounded border-yellow-600 mt-px mb-4`}`;
const Price = styled.button `${tw `text-center`}`;
const Rupee = styled.span `${tw `text-xs mr-1`}`;
const IntegerOfPrice = styled.span `${tw `text-xl`}`;
const DecimalOfPrice = styled.span `${tw `text-xs`}`;
const Installments = styled.p `${tw `text-sm text-gray-700 mb-4 h-5`}`;
const CartButton = styled.button `${tw `text-center text-sm bg-black text-white py-3 rounded w-full focus:outline-none`}`;

export { ProductContainer, FreeShipping, ProductImage, ProductTitle, DividedLine, Price, Rupee, IntegerOfPrice, DecimalOfPrice, Installments, CartButton };
