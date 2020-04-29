import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductInCart = styled.div `${tw `flex text-sm my-2 items-center relative`}`;
const RemoveProduct = styled.button `${tw `top-0 right-0 font-bold text-xs absolute`}`;
const ProductImageInCart = styled.img `${tw `w-12 object-contain`}`;
const ProductPriceDetails = styled.div `${tw `ml-2 flex-1`}`;
const ProductTitle = styled.p `${tw `text-white`}`;
const ProductDescription = styled.p `${tw `text-gray-500 text-xs`}`;
const ProductQuantity = styled.p `${tw `text-gray-500 text-xs`}`;
const ProductPrice = styled.p `${tw `text-yellow-600 ml-auto`}`;

export { ProductInCart, RemoveProduct, ProductImageInCart, ProductPriceDetails, ProductTitle, ProductDescription, ProductQuantity, ProductPrice };
