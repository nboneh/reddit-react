var ListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.post)
        this.props.onListItemClicked(this.props.post.data.url,this.props.post.data.title )
    },

    render: function() {

        var post = this.props.post

        return ( 
            <div className="post row" >
                <div className="postTitle six columns" onClick={this.handleClick}>
                    Title: {post.data.title}                    
                </div>

              <div className="postAuthor six columns">
                    Author: {post.data.author}   
                </div>
                  <div className="postSubreddit six columns">
                    Subreddit: {post.data.subreddit}   
                </div>
                  <div className="postUpvotes six columns">
                    UpVotes: #{post.data.ups} 
                </div>
                  <div className="postAuthor six columns">
                    Url: <a href={post.data.url}>{post.data.url}</a>  
                </div>
    
    
            </div>
        )
  }
})