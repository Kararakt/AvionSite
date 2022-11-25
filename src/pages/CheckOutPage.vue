<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { basketItems, total } from "../modules/BasketHelper";
import { deliveryFee, grandTotal } from "../modules/CheckOutHelper";
import {
  addItemToProfile,
  getRandomId,
  currentDate,
} from "../modules/ProfileUser";
import router from "../router";
import { scrollToTop } from "../modules/UtilityHelper";

const subTotal = ref(total.value);

const ruleFormRef = ref<FormInstance>();

const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your name"));
  } else {
    callback();
  }
};

const validateAddress = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your address"));
  } else {
    callback();
  }
};

const validateCity = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your city"));
  } else {
    callback();
  }
};

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value.indexOf("@") == -1) {
    callback(new Error("Please input correct address"));
  } else if (value.indexOf(".") == -1) {
    callback(new Error("Please input correct address"));
  } else {
    callback();
  }
};

const validateCard = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your credit card number "));
  } else {
    callback();
  }
};

const validateCardDate = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter the expiration date of your credit card"));
  } else {
    callback();
  }
};

const validateCVV = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter the CVV of your credit card"));
  } else {
    callback();
  }
};

const SubmitMessage = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push("/Profile");
      addItemToProfile(
        getRandomId(),
        currentDate(),
        deliveryFee.value,
        subTotal.value,
        grandTotal.value,
        Object.assign({}, basketItems.value),
        ruleForm.value
      );
      basketItems.value.length = 0;
      scrollToTop();
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = ref({
  Name: "",
  Email: "",
  Address: "",
  City: "",
  Card: "",
  cardDate: "",
  CVV: "",
});

const rules = reactive({
  Name: [{ validator: validateName, trigger: "blur" }],
  Address: [{ validator: validateAddress, trigger: "blur" }],
  Email: [{ validator: validateEmail, trigger: "blur" }],
  City: [{ validator: validateCity, trigger: "blur" }],
  Card: [
    { validator: validateCard, trigger: "blur" },
    {
      min: 20,
      max: 20,
      message: "Please write correct number of credit card",
      trigger: "blur",
    },
  ],
  cardDate: [
    { validator: validateCardDate, trigger: "blur" },
    {
      min: 5,
      max: 5,
      message: "Please write correct expiration date of credit card",
      trigger: "blur",
    },
  ],
  CVV: [
    { validator: validateCVV, trigger: "blur" },
    {
      min: 3,
      max: 3,
      message: "Please write correct CVV code",
      trigger: "blur",
    },
  ],
});

const formatCard = computed(() => {
  if (ruleForm.value) {
    const el = ruleForm.value.Card;
    el.length % 5 === 4
      ? (ruleForm.value.Card += " ")
      : (ruleForm.value.Card += "");
  }
});

const formatDate = computed(() => {
  if (ruleForm.value) {
    const el = ruleForm.value.cardDate;
    el.length % 4 === 2
      ? (ruleForm.value.cardDate += "/")
      : (ruleForm.value.cardDate += "");
  }
});
</script>
<template>
  <div
    class="container mx-auto grid grid-cols-3 flexCol customFlex clearFlex clearPadding py-24 gap-[4rem]"
  >
    <div class="col-span-2 flex flex-col gap-10">
      <ElForm
        label-position="top"
        status-icon
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="customRadiusColor customInput clearPadding p-8 flex flex-col gap-8"
        ><h1 class="text-center text-4xl text-[#2A254B]">Your Address</h1>
        <div class="grid grid-cols-2 customFlex clearFlex gap-6">
          <ElFormItem prop="Name"
            ><template #label><span class="labelForm">Name</span></template
            ><ElInput
              class="pb-2"
              v-model="ruleForm.Name"
              type="text"
              placeholder="Enter your Name" /></ElFormItem
          ><ElFormItem prop="Email"
            ><template #label><span class="labelForm">Email</span></template
            ><ElInput
              class="pb-2"
              v-model="ruleForm.Email"
              type="email"
              placeholder="Enter our email" /></ElFormItem
          ><ElFormItem prop="City"
            ><template #label><span class="labelForm">City</span></template
            ><ElInput
              class="pb-2"
              v-model="ruleForm.City"
              type="text"
              placeholder="Enter your city" /></ElFormItem
          ><ElFormItem prop="Address"
            ><template #label
              ><span class="labelForm">Street Address</span></template
            ><ElInput
              class="pb-2"
              v-model="ruleForm.Address"
              type="text"
              placeholder="Enter your street address"
          /></ElFormItem>
        </div>
        <h1 class="text-center text-4xl text-[#2A254B]">Payment</h1>
        <div class="grid grid-cols-2 customFlex clearFlex gap-6">
          <ElFormItem prop="Card"
            ><template #label
              ><span class="labelForm">Card Number</span></template
            ><ElInput
              v-model="ruleForm.Card"
              placeholder="Enter your card number"
              class="pb-2"
              maxlength="19"
              minlength="19"
              @keyup="formatCard" /></ElFormItem
          ><ElFormItem prop="cardDate"
            ><template #label
              ><span class="labelForm">Expiration Date</span></template
            ><ElInput
              v-model="ruleForm.cardDate"
              placeholder="Enter expiration card date"
              class="pb-2"
              maxlength="5"
              minlength="5"
              @keyup="formatDate" /></ElFormItem
          ><ElFormItem prop="CVV"
            ><template #label><span class="labelForm">CVV</span></template
            ><ElInput
              v-model="ruleForm.CVV"
              placeholder="Enter card CVV"
              minlength="3"
              maxlength="3"
              class="pb-2"
          /></ElFormItem></div
      ></ElForm>
      <div class="flex justify-between">
        <button
          class="fourthBtn"
          @click="$router.push('/ShoppingCart'), scrollToTop()"
        >
          Back to cart
        </button>
        <button class="fourthBtn" @click="SubmitMessage(ruleFormRef)">
          Place Order
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <h1 class="borderBottom pb-5 text-2xl text-[#2A254B]">Order Details</h1>
      <div v-for="basketItem in basketItems" :key="basketItem.item.id">
        <div class="flex gap-3">
          <ElImage class="h-[9rem] w-[9rem]" :src="basketItem.item.src" />
          <div class="flex flex-col gap-1 justify-center text-[#2A254B]">
            <span class="text-3xl">{{ basketItem.item.name }}</span>
            <span class="text-2xl">{{ basketItem.item.productType }}</span>
            <span class="text-2xl">Qty - {{ basketItem.count }}</span>
          </div>
        </div>
      </div>
      <h1 class="borderBottom pb-5 text-2xl text-[#2A254B]">Order Details</h1>
      <div class="flex flex-col gap-2 text-2xl text-[#2A254B]">
        <div class="flex justify-between">
          <span>Sub total</span><span>£{{ total }}</span>
        </div>
        <div class="flex justify-between">
          <span>Delivery Fee</span><span>£{{ deliveryFee }}</span>
        </div>
        <div class="flex justify-between">
          <span>Grand Total</span><span>£{{ grandTotal }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
