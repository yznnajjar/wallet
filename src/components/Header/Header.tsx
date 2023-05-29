import React from 'react';

type HeaderProps = {
    title: string;
    icon?: JSX.Element;
}
const Header = (props: HeaderProps): JSX.Element => {
    return (
        <nav className="text-responsive flex flex-row justify-between w-full items-center">
            <div>{props.title}</div>
            <div> {props.icon}</div>
        </nav>
    )
};

export default Header;
