type videoInfo = {
    url: string,
    title: string,
}

type playlistInfo = {
    title: string,
    description: string,
    url: string,
    thumbnailPath: string,
}

type mediaInfo = {
    youtubeChannel: string,
    allVideos: Array<videoInfo>,
    allPlaylists: Array<playlistInfo>
}

type musicInfo = {
    spotifyGroup: string,
    spotifyPlaylistLinks?: Array<string>,
}
