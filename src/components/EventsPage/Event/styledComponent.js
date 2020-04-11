import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EventsList = styled.div `${tw `flex flex-col w-full border border-solid border-black p-3`}`
const EachEvent = styled.div `${tw `flex justify-around border border-solid border-black`}`
const NameAndLocation = styled.div `${tw `flex flex-col`}`
const EditAndDeleteButtons = styled.div `${tw `flex flex-col`}`

export { EventsList, EachEvent, NameAndLocation, EditAndDeleteButtons }
