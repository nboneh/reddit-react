$("#hotList").on( "click", function( event ) {
    React.render(
        <List url='https://api.reddit.com/hot'/>,
        document.getElementById('content')
    )
})

$( "#newList" ).on( "click", function( event ) {
	React.render(
        <Box url='https://api.reddit.com/new'/>,
        document.getElementById('content')
    )
})



