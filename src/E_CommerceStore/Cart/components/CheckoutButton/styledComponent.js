import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ClearCart = styled.button `${tw `bg-black w-full py-2 text-white my-4 rounded opacity-50 focus:outline-none`} ${props=>({disabled:props.isDisable?true:false,cursor:props.isDisable?'not-allowed':undefined})}`;

export default ClearCart;
