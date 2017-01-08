/* This is a stateless pure component. This will be faster compared to React.Component */

import React from 'react';

const variantItem = (variant, idx) => (
    <li key={idx} className="variant-item horizontal-flex sb">
        <p>{variant.vendor}</p>
        <p>{variant.price}</p>
    </li>
);

export default function InventoryItem(props) {
    return (
        <li key={props.idx} className="item-details">
            <p className="item-title">{props.item.name}</p>
            <ul className="variants-list vertical-flex">
                { props.item.variants.map((variant, idx) => variantItem(variant, idx)) }
            </ul>
        </li>
    )
}
