import { itemsView } from "./ProductHelper";
import { counterItems } from "./UtilityHelper";
import { formInformation } from "./CheckOutHelper";

export interface profileUser {
  id: string;
  date: string;
  deliveryFee: number;
  subTotal: number;
  totalPrice: number;
  orderItems: counterItems<itemsView>[];
  informationABoutUser: formInformation;
}

export const profileUserArray = ref<profileUser[]>([]);

export const addItemToProfile = (
  id: string,
  date: string,
  deliveryFee: number,
  subTotal: number,
  totalPrice: number,
  orderItems: counterItems<itemsView>[],
  informationABoutUser: formInformation
) => {
  profileUserArray.value.push({
    id: id,
    date: date,
    deliveryFee: deliveryFee,
    subTotal: subTotal,
    totalPrice: totalPrice,
    orderItems: orderItems,
    informationABoutUser: informationABoutUser,
  });
};

export const getRandomId = () => {
  const result = Math.floor(1 + Math.random() * 900000000);
  const stringId = String(result);
  return stringId;
};

export const currentDate = () => {
  const objDate = new Date();
  const locale = "en-us";
  const month = objDate.toLocaleString(locale, { month: "long" });
  const Day = objDate.getUTCDate();
  const Year = objDate.getFullYear();
  return month + " " + Day + "," + " " + Year;
};

export const profileUserHasItem = computed(
  () => profileUserArray.value.length > 0
);
