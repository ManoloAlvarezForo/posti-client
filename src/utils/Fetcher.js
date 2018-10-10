import {POSTS_URL} from '../utils/const'

export function getPosts() {
   return fetch(POSTS_URL)
            .then(response => response.json())
            .then(json => {
                return json;
            })
}