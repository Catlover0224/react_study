import React from 'react';
import Button from './style';

const BasicButton = ({ variant, children, shape, size, border, color, font }) => {
    return (
        <div>
            <Button
                variant={variant}
                shape={shape}
                size={size}
                border={border}
                color={color}
                font={font}
            >{children}</Button>
        </div>
    );
};

export default BasicButton;