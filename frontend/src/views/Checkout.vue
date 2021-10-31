<template>
  <div class="tw-w-full tw-px-16 tw-mt-20">
    <div class="tw-w-full tw-py-8 tw-px-10">
      <p class="tw-text-5xl tw-text-black">Check out</p>
    </div>
    <div class="tw-w-full tw-flex tw-justify-center">
      <form action="" id="orderForm" class="tw-w-2/3">
        <div class="t tw-grid tw-grid-cols-6 tw-gap-3">
          <!-- GRID COL 1 -->
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="firstName"
              type="email"
              placeholder="First Name"
              data-sb-validations="required"
            />
            <label for="firstName">First Name*</label>
            <div class="invalid-feedback" data-sb-feedback="firstName:required">
              First Name is required.
            </div>
          </div>
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="middleName"
              type="text"
              placeholder="Middle Name"
              data-sb-validations=""
            />
            <label for="middleName">Middle Name</label>
          </div>
          <!-- GRID COL 2 -->
          <div class="form-floating mb-3 tw-col-span-6">
            <input
              class="form-control"
              id="lastName"
              type="text"
              placeholder="Last Name"
              data-sb-validations="required"
            />
            <label for="lastName">Last Name*</label>
            <div class="invalid-feedback" data-sb-feedback="lastName:required">
              Last Name is required.
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
            />
            <label for="street">Street*</label>
            <div class="invalid-feedback" data-sb-feedback="street:required">
              Street is required.
            </div>
          </div>
          <div class="form-floating mb-3 tw-col-span-2">
            <input
              class="form-control"
              id="houseNumber"
              type="text"
              placeholder="House number"
              data-sb-validations="required"
            />
            <label for="houseNumber">House number*</label>
            <div
              class="invalid-feedback"
              data-sb-feedback="houseNumber:required"
            >
              House number is required.
            </div>
          </div>
          <!-- GRID COL 4 -->
          <div class="form-floating mb-3 tw-col-span-4">
            <input
              class="form-control"
              id="city"
              type="text"
              placeholder="City"
              data-sb-validations="required"
            />
            <label for="city">City*</label>
            <div class="invalid-feedback" data-sb-feedback="city:required">
              City is required.
            </div>
          </div>
          <div class="form-floating mb-3 tw-col-span-2">
            <input
              class="form-control"
              id="postalCode"
              type="text"
              placeholder="Postal Code"
              data-sb-validations="required"
            />
            <label for="postalCode">Postal Code*</label>
            <div
              class="invalid-feedback"
              data-sb-feedback="postalCode:required"
            >
              Postal Code is required.
            </div>
          </div>
          <!-- GRID COL 5 -->
          <div class="form-floating mb-3 tw-col-span-6">
            <select class="form-select" id="country" aria-label="Country">
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Austria">Austria</option>
              <option value="UK">UK</option>
            </select>
            <label for="country">Country</label>
          </div>
          <!-- GRID COL 6 -->
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="eMail"
              type="text"
              placeholder="E-Mail"
              data-sb-validations="required"
            />
            <label for="eMail">E-Mail</label>
            <div class="invalid-feedback" data-sb-feedback="eMail:required">
              E-Mail is required.
            </div>
          </div>
          <div class="form-floating mb-3 tw-col-span-3">
            <input
              class="form-control"
              id="phoneNumber"
              type="text"
              placeholder="Phone-number"
              data-sb-validations="required"
            />
            <label for="phoneNumber">Phone-number</label>
            <div
              class="invalid-feedback"
              data-sb-feedback="phoneNumber:required"
            >
              Phone-number is required.
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
                >Yes, I want to get the free newsletter!</label
              >
            </div>
          </div>
          <!-- GRID COL 7 -->
          <div class="tw-col-span-6">
            <div class="mb-3">
              <label class="form-label d-block">Payment Method</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  id="optionA"
                  type="radio"
                  name="paymentMethod"
                  data-sb-validations="required"
                />
                <label class="form-check-label" for="optionA">option A</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  id="optionB"
                  type="radio"
                  name="paymentMethod"
                  data-sb-validations="required"
                />
                <label class="form-check-label" for="optionB">option B</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  id="optionC"
                  type="radio"
                  name="paymentMethod"
                  data-sb-validations="required"
                />
                <label class="form-check-label" for="optionC">option C</label>
              </div>
              <div
                class="invalid-feedback"
                data-sb-feedback="paymentMethod:required"
              >
                One option is required.
              </div>
            </div>
          </div>
          <!-- GRID COL 8 -->
          <div class="tw-col-span-6">
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                <div class="fw-bolder">Form submission successful!</div>
              </div>
            </div>
            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
            <div class="d-grid">
              <button
                class="btn btn-primary btn-lg disabled"
                id="submitButton"
                type="submit"
              >
                Bestellen
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
