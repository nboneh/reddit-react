var List = React.createClass({displayName: 'List',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data.data.children
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(id){
        var post = _.find(this.state.data, {data.id: id})
        this.refs.postiew.setState({post:post})
    },

    render: function() {

        var self = this

        var posts = this.state.data.map(function (post) {
        
          return (    
            <ListItem post={post} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="postPage">
                <div className="list six columns">
                    {posts}
                </div>
                <div className="post six columns">
                    <Post ref="post"/>
                </div>
            </div>
        )
    }
})
