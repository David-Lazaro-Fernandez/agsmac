import React from 'react';
import {useStyles} from '../public/styles/CoolButtonStyle';

const CoolButton = (props) => {
    const {type, text} = props;
    const classes = useStyles();
    return(
        <div>
            <button className={type == 'primary' ? classes.primary : classes.secondary}>
                {text}
            </button>
        </div>    
    )
}

export default CoolButton;