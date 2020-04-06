//Learn more or give us feedback
// import React from "react"

// const LikeButton = () => {
//     return <button>Like!</button>;
// }t
 
// export default LikeButton;

import React from 'react';

const likeButton = [];

const LikeButton = () => {
    for (let i = 0; i < 10; i++) {
        likeButton.push(<button>Like!</button>);
    }
      return likeButton;
}
 
export default LikeButton;