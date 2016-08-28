// Create the Object to inject
YoutubeFrame = function() {
    FPS = 30;
    NEXT_FRAME_BUTTON = 221; // Right bracket
    PREV_FRAME_BUTTON = 219; // Left bracker

    var ytPlayer = document.getElementById("movie_player");
    var ytHeader = document.getElementById("watch-header");

    // Skip backwards that amount of frames
    // http://userscripts-mirror.org/scripts/show/33042
    var PrevFrame = function(amount) {
        ytPlayer.pauseVideo();
        ytPlayer.seekBy(-amount * (1 / FPS));
    }
    
    // Skip forward that amount of frames
    // http://userscripts-mirror.org/scripts/show/33042
    var NextFrame = function(amount) {
        ytPlayer.pauseVideo();
        ytPlayer.seekBy(amount * (1 / FPS));
    }

    if (document.getElementsByClassName("ytp-chrome-controls")[0]) {

        document.addEventListener("keydown", function(k) {
            switch (k.which) {
                case PREV_FRAME_BUTTON:
                    PrevFrame(1);
                    break;
                case NEXT_FRAME_BUTTON:
                    NextFrame(1);
            }
        }, false);
    }

}

window.onload(YoutubeFrame());