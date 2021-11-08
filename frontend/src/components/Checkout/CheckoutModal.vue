<template>
  <div class="checkout-modal drawer_background tw-fixed tw-w-full tw-h-full tw-left-0 tw-top-0">
    <div class="modal">
      <div class="modal-dialog tw-max-w-xl" >
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title tw-font-bold tw-text-2xl">{{ t("CheckoutModal.thanks") }}</h2>
          </div>
          <div class="modal-body">
            <p><span class="tw-font-bold">{{ t("CheckoutModal.orderId") }}</span> {{ orderId }}</p>
            <br>
            <h2 class="tw-font-bold tw-text-xl">{{ t("CheckoutModal.productionProgress")}}</h2>
            <table>
              <tr id="tr1">
                <td class="tw-w-9 tw-font-bold tw-py-2"><p>&#10003;</p></td>
                <td><p>{{ t("CheckoutModal.step1") }}</p></td>
              </tr>
              <tr id="tr2">
                <td class="tw-w-9 tw-font-bold tw-py-2"><p>&#10003;</p></td>
                <td><p>{{ t("CheckoutModal.step2") }}</p></td>
              </tr>
              <tr id="tr3">
                <td class="tw-w-9 tw-font-bold tw-py-2"><p>&#10003;</p></td>
                <td><p>{{ t("CheckoutModal.step3") }}</p></td>
              </tr>
              <tr id="tr4">
                <td class="tw-w-9 tw-font-bold tw-py-2"><p>&#10003;</p></td>
                <td><p>{{ t("CheckoutModal.step4") }}</p></td>
              </tr>
            </table>
            <div class="tw-pt-8 tw-w-full tw-flex tw-justify-center">
              <router-link class="btn btn-primary tw-mr-4 tw-float-right tw-text-l tw-transition tw-duration-700 tw-ease-in-out tw-bg-gradient-to-tr tw-from-primary-gradient3 tw-to-primary-gradient5 hover:tw-from-primary-gradient4 hover:tw-to-primary-gradient6" to="/">{{ t("CheckoutModal.btn") }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useI18n } from "vue-i18n";

  export default {
    name: "CheckoutModal",
    props: ["orderId"],
    setup() {
    const { t } = useI18n({
      globalInjection: true,
      inheritLocale: true,
      useScope: "global",
    });
    return { t, };
  },
  }
</script>

<style lang="scss">
  .drawer_background {
    background-color: rgba(124, 124, 124, 0.55);
    z-index: 1000;
    display: none;
    transition: display 0.5s;
    display: block;

    &.show {
      display: block;
    }
  }
  
  .modal{
    display: block;
  }

  tr {
    color: black;
  }

  @keyframes changeColor {
    0% {color: black;}
    100% {color: black;}
  }

  #tr1 {
    color: #8C8A0A;
    animation: linear;
    animation-name: changeColor;
    animation-duration: 4s;
  }
  #tr2 {
    color: #8C8A0A;
    animation: linear;
    animation-name: changeColor;
    animation-duration: 8s;
  }
  #tr3 {
    color: #8C8A0A;
    animation: linear;
    animation-name: changeColor;
    animation-duration: 12s;
  }
  #tr4 {
    color: #8C8A0A;
    animation: linear;
    animation-name: changeColor;
    animation-duration: 16s;
  }
</style>