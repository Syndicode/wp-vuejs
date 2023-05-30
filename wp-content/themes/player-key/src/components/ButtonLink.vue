<template>
    <RouterLink :to="href" :class="`button button--${buttonStyle}`">{{ buttonTitle }}</RouterLink>
</template>

<script>

export default {
    name: "ButtonLink",
    props: {
        href: {
            type: String,
            required: true
        },
        buttonTitle: {
            type: String,
            required: true
        },
        buttonStyle: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
