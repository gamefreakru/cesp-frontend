<template>
    <a :href=link class="section-button" :style="style">{{ text }}</a>
</template>

<script>
    export default {
        props: {
            text: String,
            link: String,
            height: {
                type: Number,
                default: 185
            },
            width: {
                type: Number,
                default: 40
            }
        },
        computed: {
            style() {
                return 'width: ' + this.width + '; ' + 'height: ' + this.height;
            }
        }
    }
</script>

<style scoped>

    .section-button {
        font-size: 1.4rem;
        line-height: 1.4rem;
        text-align: center;
        font-weight: bold;
        color: white;
        background: #f0bf00;
        text-decoration: none;
        letter-spacing: 0.05rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 10px auto;
        border-radius: 5px;
        width: 185px;
        height: 40px;
    }

    .section-button:hover {
        background: #312A1E;
    }
    
</style>