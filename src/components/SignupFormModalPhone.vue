<template>
    <modal name="signup-form-modal-phone"
           :classes="['signup-form-modal-container-phone']"
           @before-open="beforeOpen"
           @before-close="beforeClose"
           :width="280"
           :height="300">
        <SignupForm type="signup"/>
        <img class="signup-form-modal-close-image-phone" @click="hideModal" src="../assets/common/cross.svg" alt="close">
    </modal>
</template>

<script>

    import SignupForm from "./SignupForm";

    export default {
        name: "SignupFormModalPhone",
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

    .signup-form-modal-container-phone {
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

    .signup-form-modal-close-image-phone {
        position: absolute;
        right: 0.7rem;
        top: 0.7rem;
        cursor:  pointer;
    }

</style>