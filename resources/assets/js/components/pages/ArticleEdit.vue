<template>
    <div>
        <div class="container">
            <div class="alert alert-info" role="alert" v-if="updated">
                {{ updated }}
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
                <input type="submit" value="Update" class="btn btn-primary">
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ArticleEdit",
        mounted() {
            axios.get(`/api/article/${this.$route.params.id}`)
                .then(data => {
                    this.article = data.data.data
                })
        },
        methods: {
            createArticle() {
                axios.patch('/api/article', this.article)
                    .then(() => {
                        this.updated = 'Post updated successfully.'
                    })
                    .catch(err => console.log(err))
            },
        },
        data() {
            return {
                article: {
                    id: '',
                    title: '',
                    body: ''
                },
                updated: ''
            }
        }
    }
</script>

<style scoped>

</style>