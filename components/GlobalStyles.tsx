import React from 'react';

export default ({ children }) => (
    <>
        {children}
        <style global jsx>
            {`
                body {
                }
            `}
        </style>
    </>
);
