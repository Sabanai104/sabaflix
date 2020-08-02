import React from 'react';
import { Button } from './styles';

const ButtonLink = (props) => {
    return (
        <Button as='a' className={props.className} onClick={props.onClick}>
            {props.children}
        </Button>
    );
}

export default ButtonLink;