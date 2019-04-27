<template>
    <img :alt="text" :src="image" :style="styling">
</template>

<script>
    export default {
        props: {
            image: String,
            text: String,
            width: {
                type: Number,
                default: 140
            },
            height: {
                type: Number,
                default: 140
            }
        },
        computed: {
            styling() {
                return {
                    width: this.width + 'px',
                    height: this.height + 'px',
                }
            }
        }
    }
</script>

<style scoped>

    img {
        border-radius: 50%;
    }
</style>