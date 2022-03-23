import { isValidUrl, getVideoId } from "is-youtube-url";

//Check youtube url
export const isYoutubeUrl = url => {
    const isValid = isValidUrl(url);

    return isValid;
}

//Check youtube ID
export const youtubeId = url => {
    const id = getVideoId(url);

    return id;
}