<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{disabled: !pagination.prev_page_url}">
                <a class="page-link" href="javascript:void(0)" @click="$emit('fetchArticles', pagination.prev_page_url)">Previous</a>
            </li>
            <li class="page-item disabled">
                <a class="page-link" href="javascript:void(0)">Page {{ pagination.current_page }} of {{ pagination.page_number }}</a>
            </li>
            <li class="page-item" :class="{disabled: !pagination.next_page_url}">
                <a class="page-link" href="javascript:void(0)" @click="$emit('fetchArticles', pagination.next_page_url)">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['pagination'],
    }
</script>

<style scoped>

</style>