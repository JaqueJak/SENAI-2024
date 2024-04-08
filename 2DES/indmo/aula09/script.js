const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPaudeButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('netxButton');
const playList = document.getElementById('playList');
const coverImage = document.getElementById('coverImage');
let currentSongIndex = 0;

function playPause(){
    if (audioPlayer.paused){
        audioPlayer.play();
        playPauseButton.src = 'Pause';
    }else{
        audioPlayer.pause();
        playPauseButton.scr = 'Play';
    }
}

function playNext(){
    currentSongIndex = (currentSongIndex + 1) % playList.children.length;
    loadSong();
}

function playPrev(){
    currentSongIndex = (currentSongIndex - 1 + playList.children.length) % playList.children.length;
    loadSong();
}

function loadSong(){
    const songItem = playList.children[currentSongIndex];
    const songSrc = songItem.dataset.scr;
    const coverSrc = songItem.dataset.cover;

    audioPlayer.scr = songSrc;
    coverImage.scr = coverSrc;
    audioPlayer.play();
}

 playPauseButton.addEventListener('click', playPause);
 nextButton.addEventListener('click', playNext);
 prevButton.addEventListener('click', playPrev);

 playList.addEventListener('click', (event)=> {
    const clickedIndex = Arroy.from(playlist.children).index0f(event.target);
    if(clickedIndex !== -1){
        currentSongIndex = clickedIndex;
        loadSong();
    }
 });
 loadSong();