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

    handleListItemClicked: function(url, title){
        this.refs.postView.setState({url:url})
        this.refs.postView.setState({title:title})
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
                    <Post ref="postView"/>
                </div>
            </div>
        )
    }
})
var Box = React.createClass({displayName: 'List',

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

    handleListItemClicked: function(url, title){
        this.refs.postView.setState({url:url})
        this.refs.postView.setState({title:title})
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
                    <Post ref="postView"/>
                </div>
            </div>
        )
    }
})

