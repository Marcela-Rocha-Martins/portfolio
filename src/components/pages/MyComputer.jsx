import React from 'react';

function MyComputer({zIndex, page}) {
    return (
        <div>
            <h1>Projects Component</h1>
            <p>This is MyComputer Page - with my {page.zIndex} index</p>
        </div>
    );
}
export default MyComputer;