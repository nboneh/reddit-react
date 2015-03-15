var Post = React.createClass({

    getInitialState: function() {
        return {post: null}
    },

    render: function() {
        
        if (this.state.post){

            return ( 
                <div className="post" >
                    <h2 className="postTitle">
                        {this.state.post.data.title}
                    </h2>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})