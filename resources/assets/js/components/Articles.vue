<template>
    <div>
        <div class="alert alert-danger" role="alert" v-if="deleted">
            {{ deleted }}
        </div>

        <h2>Articles</h2>
        <router-link to="/create" class="btn btn-success">Create Article</router-link>

        <Pagination :pagination="pagination" @fetchArticles="fetchArticles"></Pagination>
        <div class="jumbotron" v-for="article in articles" :key="article.id">
            <router-link :to="{ name: 'articleshow', params: { id: article.id } }">
                <h4>{{ article.title }}</h4>
            </router-link>
            <p>{{ article.body }}</p>
            <router-link :to="{ name: 'edit', params: {id: article.id}}" class="btn btn-primary">Update</router-link>
            <button class="btn btn-danger" @click="deleteArticle(article.id)">Delete</button>
        </div>
    </div>
</template>

<script>
    import Pagination from "./Pagination";
    import axios from 'axios';

    export default {
        name: "Articles",
        components: {Pagination},
        data() {
            return {
                articles: [],
                pagination: {},
                deleted: ''
            }
        },
        mounted() {
            this.fetchArticles()
        },
        methods: {
            fetchArticles(page_url) {
                page_url = page_url || '/api/articles';
                axios.get(page_url)
                    .then(data => {
                        this.articles = data.data.data;
                        let pagination = {
                            page_number: data.data.last_page,
                            current_page: data.data.current_page,
                            next_page_url: data.data.next_page_url,
                            prev_page_url: data.data.prev_page_url
                        };
                        this.pagination = pagination;
                    })
                    .catch(err => console.log(err));
            },
            deleteArticle(id) {
                axios.delete(`/api/article/${id}`)
                    .then(() => {
                        this.deleted = 'Post deleted.'
                        this.fetchArticles();
                    })
                    .catch(err => console.log(err));
            },
        }
    }
</script>