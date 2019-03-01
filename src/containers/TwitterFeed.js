import React from 'react';
import Tweet from '../components/Tweet'

class TwitterFeed extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedTweetId: null
    }
    this.handleSelectedTweet = this.handleSelectedTweet.bind(this);
  }

  handleSelectedTweet(id){
    this.setState({ selectedTweetId: id })
  }

  render() {
    let className;
    let tweets = this.props.data.map(tweet => {

      if(tweet.id === this.state.selectedTweetId){
        className = "selected"
      } else {
        className = ""
      }

      let handleClick = () => {
        this.handleSelectedTweet(tweet.id)
      }

      return(
        <Tweet
          key={tweet.id}
          id={tweet.id}
          text={tweet.text}
          name={tweet.user.name}
          userPhoto={tweet.user.profile_image_url}
          handleClick={handleClick}
          className={className}
        />
      )
    })
    return(
      <div>
        <h1>Welcome to Dog Twitter</h1>
        {tweets}
      </div>
    )

  }

}

export default TwitterFeed;
