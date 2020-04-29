import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SubTotalContainer = styled.div `${tw `flex justify-between mt-4`}`;
const SubTotalHeading = styled.p `${tw `text-gray-500 text-xl`}`;
const DisplayPrice = styled.p `${tw `text-yellow-600`}`;

export { SubTotalContainer, SubTotalHeading, DisplayPrice };
