import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Grid = styled.div `${tw `flex flex-wrap justify-between`}${props=>({width:props.width})}`;

export default Grid;
