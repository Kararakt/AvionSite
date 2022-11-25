import { total } from "../modules/BasketHelper";
export interface formInformation {
  Name: string;
  Email: string;
  Address: string;
  City: string;
  Card: string;
  cardDate: string;
  CVV: string;
}

export const deliveryFee = ref(20);

export const grandTotal = computed(() => total.value + deliveryFee.value);
