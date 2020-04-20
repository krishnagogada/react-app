import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachCell = styled.div `${tw `m-1`}${props=>({width:props.cellWidth,height:props.cellWidth,
    backgroundColor:((props.isHidden && props.shouldShowHiddenCells) || (props.isClickedOnCell && props.isHidden))?props.selectedTheme.onRightClickCellBackgroundColor:
                    ((props.isClickedOnCell && !props.isHidden) ? props.selectedTheme.onWrongClickCellBackgroundColor:props.selectedTheme.cellBackgroundColor)
})}`;

export default EachCell;
//backgroundColor:props.cellColor,
