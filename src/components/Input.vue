<template>
    <input :name="name" type="text" :id="name" :placeholder="placeholder" autocomplete="off" :style="styling">
</template>

<script>
    export default {
        props: {
            name: String,
            placeholder: String,
            height: {
                type: Number,
                default: 50
            }
        },
        computed: {
            styling() {
                return {
                    height: this.height + 'px'
                }
            }
        }
    }
</script>

<style scoped>

    input {
        width: 550px;
        padding : 0 5px;
        border: 2px solid #F0BF00;
        overflow: auto;
        outline: none;
        border-radius: 5px;
    }
    
</style>