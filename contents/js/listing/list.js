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
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(business_id){
        var post = _.find(this.state.data, {business_id: business_id})
        this.refs.postiew.setState({post:post})
    },

    render: function() {

        var self = this

        var posts = this.state.data.map(function (post) {
        
          return (    
            <DoctorListItem doctor={doctor} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="doctorPage">
                <div className="doctorList six columns">
                    {doctors}
                </div>
                <div className="doctorView six columns">
                    <DoctorView ref="doctorView"/>
                </div>
            </div>
        )
    }
})
