<template>
    <modal name="signup-form-modal-tablet"
           :classes="['signup-form-modal-container-tablet']"
           @before-open="beforeOpen"
           @before-close="beforeClose"
           :width="680"
           :height="390">
        <SignupForm type="signup"/>
        <img class="signup-form-modal-close-image-tablet" @click="hideModal" src="../assets/common/cross.svg" alt="close">
    </modal>
</template>

<script>
    
    import SignupForm from "./SignupForm";
    
    export default {
        name: "SignupFormModalTablet",
        components: {
            SignupForm
        },
        methods: {
            hideModal() {
                this.$emit("hideModal")
            },
            beforeOpen() {
                document.documentElement.style.overflow = 'hidden'
            },
            beforeClose() {
                document.documentElement.style.overflow = 'auto'
            }
        }
    }
</script>

<style scoped>

    .signup-form-modal-container-tablet {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(41, 41, 41, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.2rem;
    }

    .signup-form-modal-close-image-tablet {
        position: absolute;
        right: 2.5rem;
        top: 2.5rem;
        cursor:  pointer;
    }
    
</style>