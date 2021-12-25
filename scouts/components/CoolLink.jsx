import React from 'react';

const CoolLink = (props) => {
    const {image, text, height, transparency} = props;
    return(
        <div style={{
            background: `linear-gradient(0deg, rgba(46, 34, 112, ${transparency}), rgba(46, 34, 112, ${transparency})),
            url(${image})`,
            backgroundSize: 'cover',
            height: `${height}px`,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1
            style={{
                color: 'white',
            }}
            >{text}</h1>
        </div>
    )
}

export default CoolLink;