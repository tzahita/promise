/* Test that everything works */ 

// console.log("Hello")

import PromiseService from "./PromiseService.js";
const p = new PromiseService()
p.getDataAsPromise([], 'There is no data').then(console.log).catch(console.log)


import PostPromise from "./PostPromise.js";

PostPromise.getPosts().then(console.log).catch(console.log)

import {
    renderPosts,
    renderSearchPosts,
    renderByCategoryPosts
} from './asyncPosts.js'

const $searchPostFileds = document.getElementById('search-posts-feed')
const $categoryPicker = document.getElementById('category-picker')
renderPosts();

$searchPostFileds.addEventListener("input", event => {
    const searchText = event.target.value.trim();
    // debugger
    if (searchText.length > 0) {
        renderSearchPosts(searchText)
    } else {
        renderPosts()
    }
});

$categoryPicker.addEventListener('change', event => {
    const category = event.target.value;
    if (category != "") {
        renderByCategoryPosts(category)
    } else {
        renderPosts()
    }
})