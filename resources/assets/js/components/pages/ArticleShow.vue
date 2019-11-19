<template>
    <div>
        <div class="container">
            <h2>
                {{ article.title }}
            </h2>
            <p>
                {{ article.body }}
            </p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ArticleShow",
        data() {
            return {
                article: {
                    id: '',
                    title: '',
                    body: '',
                }
            }
        },
        mounted() {
            axios.get(`/api/article/${this.$route.params.id}`)

                .then(data => {
                    this.article = data.data.data
                })
        }
    }
</script>

<style scoped>

</style>