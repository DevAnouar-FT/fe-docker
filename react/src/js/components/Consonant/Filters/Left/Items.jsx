import React from 'react';
import {
    arrayOf,
    shape,
    func,
} from 'prop-types';

import { filterItemType } from '../../types/config';

const ItemsType = {
    handleCheck: func.isRequired,
    items: arrayOf(shape(filterItemType)).isRequired,
};

/**
 * Options of the left filter item
 *
 * @component
 * @example
 * const props= {
    items: Array,
    handleCheck: Function,
 * }
 * return (
 *   <Items {...props}/>
 * )
 */
const Items = (props) => {
    const {
        items,
        handleCheck,
    } = props;

    return (
        <ul
            data-testid="filter-group"
            className="consonant-LeftFilter-items">
            {items.map(item => (
                <li
                    key={item.id}
                    data-testid="filter-group-item"
                    className="consonant-LeftFilter-itemsItem">
                    <label
                        htmlFor={item.id}
                        className="consonant-LeftFilter-itemsItemLabel">
                        <input
                            data-testid="list-item-checkbox"
                            id={item.id}
                            value={item.id}
                            type="checkbox"
                            onChange={handleCheck}
                            checked={item.selected}
                            tabIndex="0" />
                        <span
                            className="consonant-LeftFilter-itemsItemCheckmark" />
                        <span
                            className="consonant-LeftFilter-itemsItemName">
                            {item.label}
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    );
};

Items.propTypes = ItemsType;

/* eslint-disable-next-line import/prefer-default-export */
export { Items };
