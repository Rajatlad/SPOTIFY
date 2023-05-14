console.log("Welcome to spotify");

//initialize the variables
let songindex = 0;
let index = '';
let audioelement = new Audio('let.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongName = document.getElementById('mastersongName');
let webp = document.getElementById('webp');
let songitems = Array.from(document.getElementsByClassName('songItem'));


let songs = [

    { songname: "Let me love you", filepath: "spotify/let.mp3", coverpath: "spotify/letme.jpg" },
    { songname: "Die for you", filepath: "spotify/dieforyou.mp3", coverpath: "spotify/dieforyou.jpeg" },
    { songname: "Pasoori", filepath: "songs/pasoori.mp3", coverpath: "spotify/pasoori.jpeg" },
    { songname: "Kahani suno 2.0", filepath: "songs/kahani.mp3", coverpath: "spotify/kahani.jpeg" },
    { songname: "Pyaar hota kayi baar", filepath: "songs/pyaar.mp3", coverpath: "spotify/pyaar.jpeg" },
    { songname: "Unholy", filepath: "songs/unholy.mp3", coverpath: "spotify/unholy.jpeg" },
]

songitems.forEach((element, i) => {
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});
// audioelement.play()

//handle play/pause click\
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        webp.style.opacity = 1;

    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        webp.style.opacity = 0;


    }
})


//listen to events
audioelement.addEventListener('timeupdate', () => {

    //update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);

    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        webp.style.opacity = 1;
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = `songs/${index}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        mastersongName.innerText = songs[index].songname;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=5)
    {
        index=0;
    }
    else
    {
        index+=1;
    }
    audioelement.src = `songs/${index}.mp3`;
    mastersongName.innerText = songs[index].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    webp.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0)
    {
        index=0;
    }
    else
    {
        index-=1;
    }
    audioelement.src = `songs/${index}.mp3`;
    mastersongName.innerText = songs[index].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    webp.style.opacity = 1;
})

