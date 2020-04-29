import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Sizes = styled.div `${tw `w-1/4 px-4`}`;
const SizeHeading = styled.p `${tw `my-4 font-bold`}`;
const SizeButton = styled.button `${tw `w-10 h-10 m-1 rounded-full focus:outline-none border border-transparent hover:border-gray-400`}${props=>({backgroundColor:props.isSelected?'#edf2f7':'black',color:props.isSelected?'black':'white'})}`;


export { Sizes, SizeHeading, SizeButton };
