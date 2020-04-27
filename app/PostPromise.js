import {
    posts
} from '../db/./posts.js'
import PromiseService from './PromiseService.js' 

class PostService extends PromiseService {
    getPosts() {
        return this.getDataAsPromise(posts, "No posts were found")
    }
    searchInPosts(searchText) {
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()))
        return this.getDataAsPromise(filteredPosts, "No posts were found")
    }

    searchByCategory(searchText) {
        const filteredPosts = posts.filter(post => post.category.toLowerCase().includes(searchText.toLowerCase()))
        return this.getDataAsPromise(filteredPosts, "No posts were found")
    }

    postItem({
        imageUrl,
        title,
        category,
        publishDate,
        writtenBy,
        article
    }) {
        return `
<div class="col-md-6 my-2">
              <div class="card post-card-wrap">
                <img
                  src="${imageUrl}"
                  alt="posts image"
                  class="card-image-top"
                />
                <div class="card-body">
                  <h5 class="card-title mb-0">
                   ${title}
                  </h5>
                  <small>
                    <span><i class="fa fa-hashtag"></i> ${category}</span>
                    <span class="ml-2 fa fa-calendar" aria-hidden="true">
                      ${publishDate}</span
                    >
                    <span class="ml-2 "
                      ><i class="fa fa-user-circle" aria-hidden="true"></i>
                      ${writtenBy}</span
                    >
                  </small>
                  <p class="card-text mt-2">
                    ${article}
                  </p>
                </div>
              </div>
            </div>
`
    }
}
export default new PostService()