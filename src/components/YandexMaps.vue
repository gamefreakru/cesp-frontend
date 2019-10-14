<template>
    <div id="container">
        <div id="map">
            <iframe src="https://yandex.ru/map-widget/v1/-/CCV3qK0~" :style="styling" frameborder="0">
            </iframe>
        </div>
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
                default: 560
            },
            height: {
                type: Number,
                default: 400
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
   
</style>