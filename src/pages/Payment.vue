<template>
    <form class="payment-container" target="_blank" action="https://money.yandex.ru/eshop.xml" method="post">
        <span class="payment-container-header">Оплата банковской картой</span>
        <input type="hidden" name="shopId" value="106464">
        <input type="hidden" name="scid" value="38609">
        <span>Сумма:</span>
        <Input name="sum" placeholder="введите сумму заказа в рублях" height=30 />
        <span>ФИО плательщика:</span>
        <Input name="custName" height=30 placeholder="" />
        <span>Email:</span>
        <Input name="custEmail" height=30 placeholder="" />
        <span>Телефон плательщика:</span>
        <Input name="orderDetails" height=30 placeholder="пример +79031234567" />
        <span>Способ оплаты:</span>
        <label>
            <input name="paymentType" value="AC" type="radio">
            ОПЛАТА БАНКОВСКОЙ КАРТОЙ
        </label>
        <label>
            <input name="paymentType" value="PC" type="radio">
            Оплата со счета в Яндекс.Деньгах
        </label>
        <label>
            <input name="paymentType" value="GP" type="radio">
            Оплата по коду через терминал
        </label>
        <label>
            <input name="paymentType" value="WM" type="radio">
            Оплата cо счета WebMoney
        </label>
        <label>
            <input name="paymentType" value="AB" type="radio">
            Оплата через Альфа-Клик
        </label>
        <label>
            <input name="paymentType" value="PB" type="radio">
            Оплата через Промсвязьбанк
        </label>
        <label>
            <input name="paymentType" value="MA" type="radio">
            Оплата через MasterPass
        </label>
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
        align-items: start;
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