class Tweet extends React.Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
  }

  render() {
      return (
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <div>
                  <img className="rounded-circle " src={this.props.img}/>
                </div>
                <div>
                  <h5><strong>{this.props.screen_name}</strong></h5>
                  <p>{this.props.text}</p>
                  <p className="d-inline mr-5">{this.props.retweet}</p>
                  <p className="d-inline">{this.props.favorite}</p>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

class Tweets extends React.Component{
  render(){
    let tweetCards = tweets.map(tweet => {
      return (
        <Tweet
          img={tweet.user.profile_image_url}
          screen_name={tweet.user.screen_name}
          text={tweet.text}
          retweet={tweet.retweet_count}
          favorite={tweet.favorite_count}
        ></Tweet>
      )
    })
    return (
      <div>
        {tweetCards}
      </div>
    )
  }
}

ReactDOM.render(
    <Tweets></Tweets>,
    document.getElementById('root')
);
