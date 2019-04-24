<template>
    <div id="container">
        <div id="map">
            <iframe src="https://api-maps.yandex.ru/frame/v1/-/C6uUj2yt" width="560" height="400" frameborder="0">
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
        }
    }
    
</script>

<style scoped>

</style>