// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('vid1', {
        height: '780',
        width: '853',
        videoId: 'OcbQRF0dG5s',
        playerVars: {
            'autoplay': 1,
            'showinfo': 0,
            'controls': 0
        }
    }),
        player = new YT.Player('vid2', {
        height: '780',
        width: '853',
        videoId: 'k9QzFQv9T1Q',
        playerVars: {
            'autoplay': 1,
            'showinfo': 0,
            'controls': 0
        }
    })
}
