import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Result = styled.div `${tw `flex flex-col justify-center items-center`}${props=>({backgroundColor:props.selectedTheme.backgroundColor})}`;
const Level = styled.div `${tw `text-4xl m-3`}${props=>({color:props.selectedTheme.color})}`;
const Congratulations = styled.div `${tw `text-3xl font-bold m-3`}color:#48bb78`;
const PlayAgain = styled.button `${tw `text-2xl px-2 py-2`}${props=>({color:props.selectedTheme.color})}background-color:#667eea`;

export { Result, Level, Congratulations, PlayAgain };
