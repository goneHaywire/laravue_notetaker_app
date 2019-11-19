<template>
    <div>
        <div class="container">
            <div class="alert alert-success" role="alert"  v-if="created">
                <p>{{ created }}</p>
            </div>

            <form method="post" @submit.prevent="createArticle">
                <div class="form-group">
                    <label for="post_title">Title</label>
                    <input type="text" class="form-control" id="post_title" placeholder="Post Title"
                           v-model="article.title" required>
                </div>
                <div class="form-group">
                    <label for="post_body">Body</label>
                    <textarea class="form-control" id="post_body" placeholder="Post Body" v-model="article.body"
                              required></textarea>
                </div>
                <input type="submit" value="Add Post" class="btn btn-success">
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "articlecreate",
        data() {
            return {
                article: {
                    id: '',
                    title: '',
                    body: ''
                },
                created: ''
            }
        },
        methods: {
            createArticle(){
                axios.post('/api/article', this.article)
                    .then(data => {
                        this.created = 'Post created successfully.'
                        this.article = {
                            id: '',
                            title: '',
                            body: ''
                        };
                    })
                    .catch(err => console.log(err))
            },
        }
    }
</script>

<style scoped>

</style>