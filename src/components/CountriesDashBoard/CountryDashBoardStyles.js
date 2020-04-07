import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const AllCountries = styled.div `${tw `flex flex-wrap justify-center min-h-75vh bg-gradient-t-red`} `;

const CountriesDashBoardHeader = styled.div `${tw `flex justify-between `}box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);height: 70px;`;

const WhereInTheWorld = styled.button `${tw `text-xl`} ${(props=>({color:props.theme.color}))}`;

const ThemeChange = styled.button `${tw `text-xl`} ${(props=>({color:props.theme.color}))}`;

const Country = styled.div `${tw `w-48 h-350 border border-solid border-transparent rounded mb-8 mr-10 `} ${(props=>({backgroundColor:props.theme.buttonsBackgroundcolor}))}box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);`;

const DisplayImage = styled.img `${tw `w-full rounded-b-none object-cover`}`;

const CountryShortDetails = styled.div `${tw `flex flex-col justify-around`} height: 45%`;

const CountryBorders = styled.div `${tw `flex justify-around flex-wrap`}`;

const BorderButton = styled.button `${tw `border border-solid border-transparent text-lg p-2 mb-1`} ${(props=>({backgroundColor:props.theme.buttonsBackgroundcolor,color:props.theme.color}))} box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2)`;

export { AllCountries, CountriesDashBoardHeader, WhereInTheWorld, ThemeChange, Country, DisplayImage, CountryShortDetails, CountryBorders, BorderButton };
