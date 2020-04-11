import styled from '@emotion/styled';
import tw from 'tailwind.macro';

//------------------------------->Emoji Game<---------------------
const EmojiGameContainer = styled.div `${tw `flex flex-col`}`;
const AllEmojiCards = styled.div `${tw `flex w-full flex-wrap justify-center pt-10`}${props=>({backgroundColor:props.selectedTheme.backgroundcolor})}`;
//------------------------------->Header<-------------------------
const MediumDevicesHeader = styled.div `${tw `flex justify-around h-9vh items-center`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground,color:props.selectedTheme.color})}`;
const SmallDeviceScoreAndTopScore = styled.div `${tw `flex justify-around flex-col items-center sm:hidden`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground,color:props.selectedTheme.color})}`;
const Header = styled.div `${tw `flex justify-around flex-col`}`;
const GameName = styled.div `${tw `text-3xl w-77vh`}`;
const GameScoresAndThemeOption = styled.div `${tw `flex items-center w-20vw`}`;
const SmallDeviceScore = styled.div `${tw `sm:hidden text-base font-bold mb-4`}`;
const SmallDeviceTopScore = styled.div `${tw `sm:hidden text-base font-bold mb-4`}`;
const MediumDeviceScore = styled.div `${tw `text-base font-bold mr-6 sm:flex hidden`}`;
const MediumDeviceTopScore = styled.div `${tw `text-base font-bold mr-6 sm:flex hidden`}`;
const ThemeOption = styled.button `${tw `text-lg border border-solid p-2 w-32`}${props=>({borderColor:props.selectedTheme.color})}`;
//-------------------------------->Emoji Card<--------------------
const SingleEmojiCard = styled.div `${tw `flex flex-col items-center rounded w-64 h-64 mb-16 mr-5 ml-5 shadow-custom`}${props=>({backgroundColor:props.selectedTheme.emojiCardBackground,color:props.selectedTheme.color})}`;
const EmojiImage = styled.img `${tw `w-4/5`}`;
const EmojiName = styled.div `${tw `text-base`}`;
//-------------------------------->Win or Loss<-------------------
const EndGame = styled.div `${tw `flex flex-col justify-center items-center h-77vh`}${props=>({backgroundColor:props.selectedTheme.backgroundcolor})}`;
const TotalGameEndScore = styled.div `${tw `text-4xl text-blue-900 font-bold  m-3`}${props=>({color:props.selectedTheme.color})}`;
const WinOrLossDisplay = styled.div `${tw `text-3xl font-black m-3`}${props=>({color:props.color})}`;
const PlayAgain = styled.button `${tw `text-2xl p-2 text-white rounded`}background-color:#667eea`;
//-------------------------------->How To Play<-------------------
const InstructionFooter = styled.div `${tw `h-14vh pl-4 pt-1`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground,color:props.selectedTheme.color})}`;
const InstructionHeading = styled.div `${tw `text-2xl font-bold `}`;
const Instructions = styled.div `${tw `text-xl pl-4 pt-1 pb-4`}`;
//--------------------------------->Export<-----------------------
export { EmojiGameContainer, AllEmojiCards, Header, MediumDevicesHeader, SmallDeviceScoreAndTopScore, GameName, GameScoresAndThemeOption, SmallDeviceScore, SmallDeviceTopScore, MediumDeviceScore, MediumDeviceTopScore, ThemeOption, SingleEmojiCard, EmojiImage, EmojiName, EndGame, TotalGameEndScore, WinOrLossDisplay, PlayAgain, InstructionFooter, InstructionHeading, Instructions };
