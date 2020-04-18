import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const WholeGameContainer = styled.div `${tw `flex flex-col items-center justify-center min-h-screen`}${props=>({backgroundColor:props.selectedTheme.backgroundColor})}`

export default WholeGameContainer;
