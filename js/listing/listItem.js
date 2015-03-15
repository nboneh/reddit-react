var ListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.post)
        this.props.onListItemClicked(this.props.post.data.id)
    },

    render: function() {

        var post = this.props.post

        return ( 
            <div className="post row" >
                <div className="postTitle six columns" onClick={this.handleClick}>
                    {post.data.title}                    
                </div>
                <div className="postLink six columns">
                    {post.data.url}   
                </div>
            </div>
        )
  }
})