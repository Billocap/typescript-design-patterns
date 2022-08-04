interface ThirdPartyYouTubeLib {
    listVideos(): void;
    getVideoInfo(id: number): void;
    downloadVideo(id: number): void;
}

class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
    listVideos() {}
    getVideoInfo(id: number) {}
    downloadVideo(id: number) {}
}

// This could cache the requests made by the user;
class CachedYouTubeClass implements ThirdPartyYouTubeLib {
    private service: ThirdPartyYouTubeClass;
    
    constructor(service: ThirdPartyYouTubeClass) {
        this.service = service;
    }

    listVideos() {}
    getVideoInfo(id: number) {}
    downloadVideo(id: number) {}
}