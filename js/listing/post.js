var Post = React.createClass({

    getInitialState: function() {
        return {url: null, title: null}
    },

    render: function() {
        
        if (this.state.title && this.state.url){

            return ( 
                <div className="post" >
                    <h5 className="postTitle">
                        {this.state.title}
                    </h5>
                    <iframe src={this.state.url} width='600' height='600' scrolling='yes' frameborder='2'></iframe>
                </div>
            )

        }else{

            return (
                <h2>Click title to see details</h2>
            )
        }
  }
})