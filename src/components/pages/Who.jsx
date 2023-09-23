import React from 'react';

function Who({zIndex, page}) {
    return (
        <div>
            <h1>Who am I Component</h1>
            <p>This is my Who Page - with my {page.zIndex} index</p>
        </div>
    );
}
export default Who;