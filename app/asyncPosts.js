import postPromise from './PostPromise.js';

const $postRow = document.getElementById('posts-row'); 
export async function renderPosts() {
    try {
        const posts = await postPromise.getPosts();
        $postRow.innerHTML = '';

        posts.forEach(post => {
            $postRow.innerHTML += postPromise.postItem(post)
        })
    } catch (error) {
        $postRow.innerHTML = `<div class="col-12"><i>${error}...</i></div>`
        console.error(error)
    }
}

export async function renderSearchPosts(searchText) {
    try {
        const posts = await postPromise.searchInPosts(searchText);
        $postRow.innerHTML = '';

        posts.forEach(post => {
            $postRow.innerHTML += postPromise.postItem(post)
        })
    } catch (error) {
        $postRow.innerHTML = `<div class="col-12"><i>${error}...</i></div>`
        console.error(error)
    }
}

export async function renderByCategoryPosts(category) {
    try {
        const posts = await postPromise.searchByCategory(category);
        $postRow.innerHTML = '';

        posts.forEach(post => {
            $postRow.innerHTML += postPromise.postItem(post)
        })
    } catch (error) {
        $postRow.innerHTML = `<div class="col-12"><i>${error}...</i></div>`
        console.error(error)
    }
}