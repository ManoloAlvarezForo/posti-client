import {POSTS_URL, CAT_RANDOM_IMAGE} from '../utils/const'

export const getPosts = async () => {
   return await apiGET(POSTS_URL);
}

function apiGET(url) {
    return fetch(url)
            .then(response => response.json())
            .then(json => {
                return json;
            })
}