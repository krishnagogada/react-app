import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GameHeader = styled.div `${tw `flex flex-col`}${props=>({width:props.width})}`;
const TopLevel = styled.div `${tw `text-xl text-center mb-12`}${props=>({color:props.selectedTheme.color})}`;
const LevelAndTheme = styled.div `${tw `flex justify-between mb-4 px-1`}`;
const Level = styled.div `${tw `text-xl`}${props=>({color:props.selectedTheme.color})}`;
const ThemeButton = styled.button `${tw `text-xl border px-2 py-1`}${props=>({color:props.selectedTheme.color,borderColor:props.selectedTheme.color})}`;

export { GameHeader, TopLevel, LevelAndTheme, Level, ThemeButton };
