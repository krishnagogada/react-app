import React from 'react';
import { SubTotalContainer, SubTotalHeading, DisplayPrice } from './styledComponent.js';

function SubTotal(props) {
    return (
        <SubTotalContainer class="flex justify-between mt-4">
            <SubTotalHeading class="text-gray-500">SUBTOTAL</SubTotalHeading>
            <DisplayPrice class="text-yellow-600">₹ {props.price}</DisplayPrice>
        </SubTotalContainer>
    );
}

export default SubTotal;
