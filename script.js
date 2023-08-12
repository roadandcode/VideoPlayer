let player
function onYouTubeIframeAPIReady(){
    console.log("API is loaded")
    player = YT.player("player",{
        height: 500,
        width:900,
        videoId:"qLE5DH4b3vI",
        playerVars:{
            playersinline :1,
            autoplay:1,
            controls:1

        }
        // events:{
        //     onReady:onPlayerReady,
        //     OnStateChange: onPlayerStateChange
        // }
    })
}