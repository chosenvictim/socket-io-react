import React from 'react';

export default function InventoryItem(props) {
    return (
        <ul key={props.idx} className="item-details">
            <li>"Item" :- {props.item.name}</li>
            <li>"Vendor" :- {props.item.vendor}</li>
            <li>"Price" :- {props.item.price}</li>
        </ul>
    )
}