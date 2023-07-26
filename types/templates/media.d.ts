type videoInfo = {
    url: string,
    title: string,
}

type playlistInfo = {
    title: string,
    description: string,
    url: string,
}

type mediaInfo = {
    allVideos: Array<videoInfo>,
    allPlaylists: Array<playlistInfo>
}