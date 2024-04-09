const playListContainer = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const tracks = [
    {trackId: "/music/French_Montana_-_Unforgettable_(Lyrics)[TikTok_Remix]_I_need_to_get_you_alone_Ooh,_Why_not(360p).mp4" , title: "Unforgettable"},
    {trackId: "/music/Lana_Del_Rey_-_Queen_Of_Disaster_(Lyrics)(720p).mp4" , title: "Queen of disaster"},
    {trackId: "/music/Willow_-_Wait_A_Minute!_(Tiktok_Remix)[Lyrics]___i_think_I_left_my_conscience_on_your_front_doorstep(720p).mp4", title: "Wait A Minute"}
]

for (let i = 0; i < tracks.length; i++){
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        const trackId = tracks[i].trackId;
        audioTag.src = trackId;
        audioTag.play();
    })
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playListContainer.append(trackTag)
}

for (let i of tracks){
    console.log(i)
}

console.log(audioTag.src)