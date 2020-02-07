<template>
    <div class="partners-container">
        <SectionHeader image="teachers" title="Partners" description="Наши партнёры" style="margin-top: 15rem;"/>
        <div id="partners-grid">
            <Partner v-for="(partner, index) in partners"
                     :key="index"
                     :image="partner.photo"
                     :link="partner.sysName"
                     :name="partner.name" />
        </div>
    </div>
</template>

<script>
    
    import SectionHeader from "../components/SectionHeader"
    import Partner from "../components/Partner"
    import Service from "../service"
    
    export default {
        components: {
            SectionHeader,
            Partner
        },
        data() {
            return {
                partners: {}
            }
        },
        mounted() {
            Service.get("partners", (status, data) => {
                this.partners = data;
            })
        }
    }
</script>

<style scoped>

    .partners-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 55px 60px;
        padding: 20px;
        background-color: #ffffffb3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 1px 6px #0000001a;
        font-size: 1.6rem;
    }
    
    #partners-grid {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 7.5rem 2.5%;
        margin: 4rem 0 4rem;
        justify-content: center;
        align-items: center;
    }
    
</style>