<template>
    <div>
        <NtmBlogLatestPosts :articles="articles"/>
        <ContentDoc path="/articles"/>
    </div>
</template>
<script setup>
    const articles = await queryContent('/').find()
    definePageMeta({})
</script>
