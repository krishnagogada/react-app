import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SortPriceAndNumberOfProducts = styled.div `${tw `flex justify-between items-center my-4`}`;
const NumberOfProducts = styled.p `${tw `sm:flex hidden`}`;
const SortLabel = styled.div `${tw `text-center`}`;
const SortSelector = styled.select `${tw `rounded-md ml-1 bg-white border border-gray-400 hover:border-gray-700 focus:outline-none p-1`}`;
const OptionsForSort = styled.option `${ tw `focus:outline-none` }`;

export { SortPriceAndNumberOfProducts, NumberOfProducts, SortLabel, SortSelector, OptionsForSort };
