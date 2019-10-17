<template>
    <button type="submit" class="section-button" :style="styling">{{ text }}</button>
</template>

<script>
    export default {
        props: {
            text: String,
            link: String,
            buttonHeight: {
                type: Number,
                default: 40
            },
            buttonWidth: {
                type: Number,
                default: 185
            }
        },
        computed: {
            styling() {
                return {
                    width: this.buttonWidth + 'px',
                    height: this.buttonHeight + 'px'
                }
            }
        }
    }
</script>

<style scoped>

    .section-button {
        font-size: 2rem;
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
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    .section-button:hover {
        background: #312A1E;
    }
    
    .section-button:focus {
        outline: none;
    }

</style>