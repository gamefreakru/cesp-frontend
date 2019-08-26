<template>
    <div class="container">
        <hr class="footer-delimiter"/>
        <div class="footer-links">
            <span class="copyright">© Centro Vamos, 2019</span>
            <div class="links-container">
                <a class="link" href="#"><img alt="facebook" src="../assets/footer/facebook.svg"></a>
                <a class="link" href="#"><img alt="youtube" src="../assets/footer/youtube.svg"></a>
                <a class="link" href="#"><img alt="instagram" src="../assets/footer/instagram.svg"></a>
            </div>
            <span class="information">Правовая информация</span>
            <div class="payment-container">
                <span class="payment-info">Принимаем к оплате</span>
                <img class="payment-method" alt="visa" src="../assets/footer/visa.svg">
                <img class="payment-method" alt="mastercard" src="../assets/footer/mastercard.svg">
                <img class="payment-method" alt="mir" src="../assets/footer/mir.svg">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    
    .container {
        background-color: var(--background-color-dark);
        padding: 7.5rem 10rem 0 10rem;
        display: flex;
        flex-direction: column;
    }
    
    .footer-delimiter {
        border: 0;
        border-top: rgba(255, 255, 255, 0.1) 0.1rem solid;
        margin: 2rem 0;
    }
    
    .footer-links {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    .links-container {
        display: flex;
        align-items: center;
    }
    
    .link {
        height: 3.6rem;
        width: 3.6rem;
        border: solid 0.2rem var(--border-color);
        border-radius: 2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        display: flex;
        justify-content: center;
    }
    
    .information {
        color: var(--main-color);
        font-weight: bold;
        margin-left: auto;
        margin-right: auto;
    }
    
    .copyright {
        color: rgba(255, 255, 255, 0.45);
        margin-right: 10rem;
    }

    .payment-container {
        display: flex;
        align-items: center;
    }
    
    .payment-info {
        color: rgba(255, 255, 255, 0.45);
        margin-right: 3.6rem;
    }
    
    .payment-method {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    
</style>