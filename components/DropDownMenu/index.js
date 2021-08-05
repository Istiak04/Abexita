import React from 'react';
import DropDownMenuItem from './DropDownMenuItem';
import './dropDownMenu.css';


function DropDownMenu(props) {
    const { className } = props;
    return (
        <div className={className}>
            <ul>
                <DropDownMenuItem
                    link='./graphics'
                    title='Graphics'
                />
                <DropDownMenuItem
                    link='./graphics'
                    title='Graphics'
                />
                <DropDownMenuItem
                    link='./graphics'
                    title='Graphics'
                />
            </ul>
            <ul>
                <DropDownMenuItem
                    link='./graphics'
                    title='Graphics'
                />
                <DropDownMenuItem
                    link='./graphics'
                    title='Graphics'
                />
                <DropDownMenuItem
                    link='./graphics'
                    title='Graphics'
                />
            </ul>
        </div>
    )
}

export default DropDownMenu;
