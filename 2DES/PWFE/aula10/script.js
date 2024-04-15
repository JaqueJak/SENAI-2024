// Selecionando elementos do DOM
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const playlist = document.getElementById('playlist');
const coverImage = document.getElementById('coverImage');

// Array para armazenar informações da playlist
const songs = [
    { title: "Dust in the Wind", artist: "Kansas", cover: "cover1.jpg", file: "song1.mp3" },
    { title: "Bad Company", artist: "Bad Company", cover: "cover.jpg", file: "song2.mp3" },
    { title: "Movin' On", artist: "Unknown Artist", cover: "cover.jpg", file: "song3.mp3" }
];

// Índice da música atual na playlist
let currentSongIndex = 0;

// Função para carregar uma música específica
function loadSong(index) {
    const song = songs[index];
    coverImage.src = song.cover;
    audioPlayer.src = song.file;
}

// Função para reproduzir ou pausar a música
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Event listener para o botão play/pause
playPauseButton.addEventListener('click', togglePlayPause);

// Event listener para o botão anterior
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
});

// Event listener para o botão próximo
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
});

// Event listener para clicar em uma música da playlist
playlist.addEventListener('click', (event) => {
    if (event.target.classList.contains('song-item')) {
        const index = Array.from(event.target.parentNode.children).indexOf(event.target);
        currentSongIndex = index;
        loadSong(currentSongIndex);
        audioPlayer.play();
    }
});

// Carregar a primeira música ao carregar a página
loadSong(currentSongIndex);     