import React from 'react';

interface Button {
    type: 'outline'| 'fill',
    size: "m" | "xl",
    children: string,
    icon?: any
}

function Button(props: Button): JSX.Element {
    return (
        <div>
            
        </div>
    );
}

export default Button;