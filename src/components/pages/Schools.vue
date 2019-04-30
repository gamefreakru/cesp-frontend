<template>
    
    <div id="schools">
        
        <SectionHeader image="teachers" title="Español en España" description="Школы испанского языка в Испании" />
        
        <div id="schools-grid">
            
            <School :image="getImgUrl('school')" name="International house Barcelona" 
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>

            <School :image="getImgUrl('school')" name="International house Barcelona"
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>

            <School :image="getImgUrl('school')" name="International house Barcelona"
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>

            <School :image="getImgUrl('school')" name="International house Barcelona"
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>

            <School :image="getImgUrl('school')" name="International house Barcelona"
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>

            <School :image="getImgUrl('school')" name="International house Barcelona"
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>

            <School :image="getImgUrl('school')" name="International house Barcelona"
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>

            <School :image="getImgUrl('school')" name="International house Barcelona"
                    link="#" sub-name="Школа Испанского языка в Барселоне"
                    description="IH Barcelona одна из лучших школ испанского языка в Испании."/>
            
        </div>
        
    </div>
    
</template>

<script>
    
    import SectionHeader from "../SectionHeader"
    import School from "../School"
    
    export default {
        name: "",
        components: {
            SectionHeader,
            School
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../../assets/schools', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>
    
    #schools {
        padding: 60px 55px;
    }
    
    #schools-grid {
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 30px;
        margin: 40px 0 20px;
    }

</style>