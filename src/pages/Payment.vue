<template>
    <form class="payment-container" target="_blank" action="https://money.yandex.ru/eshop.xml" method="post">
        <span class="payment-container-header">Оплата банковской картой</span>
        <input type="hidden" name="shopId" value="106464">
        <input type="hidden" name="scid" value="38609">
        <input type="hidden" name="paymentType" value="AC">
        <span>Сумма:</span>
        <Input name="sum" placeholder="введите сумму заказа в рублях" height=30 />
        <span>ФИО плательщика:</span>
        <Input name="custName" height=30 placeholder="" />
        <span>Email:</span>
        <Input name="custEmail" height=30 placeholder="" />
        <span>Телефон плательщика:</span>
        <Input name="orderDetails" height=30 placeholder="пример +79031234567" />
        <FormButton text="Заплатить" :button-height="40" :button-width="150" />
    </form>
</template>

<script>
    import Input from '../components/Input'
    import FormButton from "../components/FormButton";
    
    export default {
        components: {
            Input,
            FormButton
        }
    }
</script>

<style scoped>

    .payment-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.6rem;
        padding-left: 12.5rem;
        padding-bottom: 5rem;
    }
    
    .payment-container-header {
        font-size: 3rem;
        margin: 17rem 0 1rem;
    }
    
    .payment-container input {
        margin: 1rem 0;
    }
    
</style>