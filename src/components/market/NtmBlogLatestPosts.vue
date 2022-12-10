<template>
    <div v-for="article in articles">
        article: {{article.data}}
        <ContentRenderer :value="article.data"/>
    </div>
</template>

<script setup>
    // implicit (assumes $eq operator)
    const props = defineProps(['articles'])
</script>
