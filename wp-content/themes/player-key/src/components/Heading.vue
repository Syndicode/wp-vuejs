<script>
export default {
    name: "Heading",
    props: {
        level: {
            type: Number,
        },
        align: {
            type: String,
            default: 'center',
            validator(value) {
                return ['center', 'left', 'right'].includes(value)
            }
        }
    }
}
</script>

<template>
    <component :is="`h${!level || level > 5 ? 1 : level}`"
               :class="`heading heading--${!level || level > 5 ? 1 : level} heading--${align}`">
        <slot/>
    </component>
</template>

<style scoped>
.heading {
    margin-top: 0;
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
}

.heading--1 {
    font-size: 60px;
    margin-bottom: 72px;
}

.heading--center {
    text-align: center;
}

.heading--left {
    text-align: left;
}

.heading--right {
    text-align: right;
}
</style>
