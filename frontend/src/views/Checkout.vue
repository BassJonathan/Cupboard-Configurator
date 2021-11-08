<template>
  <div class="tw-w-full tw-px-16 tw-mt-20">
    <div class="tw-w-full tw-py-8 tw-px-10">
      <p class="tw-text-5xl tw-text-black">Check out</p>
    </div>
    <div class="tw-w-full tw-flex tw-justify-center">
      <checkout-modal :orderId="orderId" v-if="displayModal"/>
      <form @submit.prevent="postOrder" id="orderForm" class="tw-w-2/3">
        <div class="t tw-grid tw-grid-cols-6 tw-gap-3">
          <!-- GRID COL 1 -->
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="firstName"
              type="text"
              placeholder="First Name"
              required
            />
            <label for="firstName"> {{ t("Checkout.firstname") }}</label>
          </div>
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="middleName"
              type="text"
              placeholder="Middle Name"
            />
            <label for="middleName"> {{ t("Checkout.middelname") }}</label>
          </div>
          <!-- GRID COL 2 -->
          <div class="form-floating mb-3 tw-col-span-6">
            <input
              class="form-control"
              id="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
            <label for="lastName"> {{ t("Checkout.lastname") }} </label>
            <div class="invalid-feedback" data-sb-feedback="lastName:required">
              {{ t("Checkout.lastname_req") }}
            </div>
          </div>
          <!-- GRID COL 3 -->
          <div class="form-floating mb-3 tw-col-span-4">
            <input
              class="form-control"
              id="street"
              type="text"
              placeholder="Street"
              data-sb-validations="required"
              required
            />
            <label for="street">{{ t("Checkout.street") }}</label>
            <div class="invalid-feedback" data-sb-feedback="street:required">
              {{ t("Checkout.street_req") }}
            </div>
          </div>
          <div class="form-floating mb-3 tw-col-span-2">
            <input
              class="form-control"
              id="houseNumber"
              type="number"
              placeholder="House number"
              required
            />
            <label for="houseNumber">{{ t("Checkout.numb") }}</label>
            <div
              class="invalid-feedback"
              data-sb-feedback="houseNumber:required"
            >
              {{ t("Checkout.numb_req") }}
            </div>
          </div>
          <!-- GRID COL 4 -->
          <div class="form-floating mb-3 tw-col-span-4">
            <input
              class="form-control"
              id="city"
              type="text"
              placeholder="City"
              required
            />
            <label for="city">{{ t("Checkout.city") }}</label>
            <div class="invalid-feedback" data-sb-feedback="city:required">
              {{ t("Checkout.city_req") }}
            </div>
          </div>
          <div class="form-floating mb-3 tw-col-span-2">
            <input
              class="form-control"
              id="postalCode"
              type="number"
              placeholder="Postal Code"
              required
            />
            <label for="postalCode">{{ t("Checkout.post") }}</label>
            <div
              class="invalid-feedback"
              data-sb-feedback="postalCode:required"
            >
              {{ t("Checkout.post_req") }}
            </div>
          </div>
          <!-- GRID COL 5 -->
          <div class="form-floating mb-3 tw-col-span-6">
            <select class="form-select" id="country" aria-label="Country" required>
              <option value="Germany">{{ t("Checkout.ger") }}</option>
              <option value="France">{{ t("Checkout.fra") }}</option>
              <option value="Austria">{{ t("Checkout.aus") }}</option>
              <option value="UK">{{ t("Checkout.uk") }}</option>
            </select>
            <label for="country">{{ t("Checkout.country") }}</label>
            
          </div>
          <!-- GRID COL 6 -->
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="eMail"
              type="email"
              placeholder="E-Mail"
              required
            />
            <label for="eMail">{{ t("Checkout.email") }}</label>
            <div class="invalid-feedback" data-sb-feedback="eMail:required">
              {{ t("Checkout.email_req") }}
            </div>
          </div>
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="phoneNumber"
              type="text"
              placeholder="Phone-number"
              required
            />
            <label for="phoneNumber">{{ t("Checkout.phone") }}</label>
            <div
              class="invalid-feedback"
              data-sb-feedback="phoneNumber:required"
            >
              {{ t("Checkout.phone_req") }}
            </div>
          </div>
          <!-- GRID COL 6 -->
          <div class="mb-3 tw-col-span-6">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="yesIWantToGetTheFreeNewsletter"
                type="checkbox"
                name="yesIWantToGetTheFreeNewsletter"
              />
              <label
                class="form-check-label"
                for="yesIWantToGetTheFreeNewsletter"
                >{{ t("Checkout.newsletter") }}</label
              >
            </div>
          </div>
          <!-- GRID COL 7 -->
          <div class="tw-col-span-6">
            <div class="mb-3">
              <label class="form-label d-block">{{ t("Checkout.payment") }}</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  id="optionA"
                  type="radio"
                  name="paymentMethod"
                  required
                />
                <label class="form-check-label" for="optionA">{{ t("Checkout.option-a") }}</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  id="optionB"
                  type="radio"
                  name="paymentMethod"
                  required
                />
                <label class="form-check-label" for="optionB">{{ t("Checkout.option-b") }}</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  id="optionC"
                  type="radio"
                  name="paymentMethod"
                  required
                />
                <label class="form-check-label" for="optionC">{{ t("Checkout.option-c") }}</label>
              </div>
              <div
                class="invalid-feedback"
                data-sb-feedback="paymentMethod:required"
              >
                {{ t("Checkout.payment_req") }}
              </div>
            </div>
          </div>
          <!-- GRID COL 8 -->
          <div class="tw-col-span-6">
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                <div class="fw-bolder">{{ t("Checkout.success") }}</div>
              </div>
            </div>
            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">
                {{ t("Checkout.error") }}
              </div>
            </div>
            <div class="d-grid">
              <button
                class="btn btn-primary btn-lg"
                id="submitButton"
                type="submit"
              >
                {{ t("Checkout.order") }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import CheckoutModal from "@/components/Checkout/CheckoutModal.vue";

export default {
  name: "Checkout",
  setup() {
    const { t } = useI18n({
      globalInjection: true,
      inheritLocale: true,
      useScope: "global",
    });
    return { t, };
  },
  components: {
    CheckoutModal
  },
  data() {
    return {
      displayModal: false,
      orderId: 0
    }
  },
  computed:{
    currency() {
      return this.$store.state.currency;
    },
    cart_items() {
      return this.$store.getters.cartItems;
    },
    cart_total() {
      return this.$store.getters.cartTotal;
    },
    tax() {
      return this.$store.getters.getTaxRate;
    }
  },
  methods: {
    postOrder(){
      var d = new Date()
      var orderData = {
        "orderDate": d.toISOString(),
        "country": document.getElementById('country').value,
        "customer": {
            "firstname": document.getElementById('firstName').value,
            "middlename": document.getElementById('middleName').value,
            "lastname": document.getElementById('lastName').value,
            "address": document.getElementById('street').value + document.getElementById('houseNumber').value,
            "postalCode": document.getElementById('postalCode').value,
            "city": document.getElementById('city').value,
            "country": document.getElementById('country').value,
            "phone": document.getElementById('phoneNumber').value,
            "email": document.getElementById('eMail').value
        },
        "price": {
            "currency": this.currency,
            "netPrice": this.cart_total,
            "taxPercentage": this.tax,
            "taxAmmount": this.cart_total * this.tax,
            "grossPrice": this.cart_total + (this.cart_total * this.tax)
        },
      }

      let products = JSON.parse(JSON.stringify(this.cart_items))
      orderData['products'] = products

      console.log(orderData)
      this.displayModal = true;

      const vm = this;
      this.axios.post('/order', orderData)
      .then(function (response) {
        console.log(response);
        vm.orderId = response.data.orderId;
        vm.displayModal = true;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    showModal() {
      
    },
  }
};
</script>

<style></style>
