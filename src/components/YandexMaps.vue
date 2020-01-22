<template>
    <div id="container">
        <iframe class="map-wrapper" src="https://yandex.ru/map-widget/v1/-/CCV3qK0~" :style="styling" frameborder="0" />
        <div style="text-align: right;"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let yandexMapsScript = document.createElement('script');
            yandexMapsScript.setAttribute('src', 'https://api-maps.yandex.ru/2.0-stable/?load=package.full&lang=ru-RU&onload=fid_1746982');
            document.head.appendChild(yandexMapsScript);
        },
        props: {
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            }
        },
        computed: {
            styling() {
                if(this.width > 0 && this.height > 0)
                {
                    return {
                        width: this.width + 'px',
                        height: this.height + 'px',
                    }
                }
                else if(this.height > 0)
                {
                    return {
                        height: this.height + 'px'
                    }
                }
                else return ""
            }
        }
    }
    
</script>

<style scoped>

    @media screen and (max-width: 1280px) {
        .map-wrapper {
            width: 100%;
        }
    }
    
</style>