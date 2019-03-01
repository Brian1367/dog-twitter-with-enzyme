import React from 'react';

const Tweet = (props) => {

  return(
    <div onClick={props.handleClick} className={`tweet-box ${props.className}`}>
      <img src={props.userPhoto} />
      <span>{props.name}</span>
      <p>{props.text}</p>
    </div>

  )
}
export default Tweet;
