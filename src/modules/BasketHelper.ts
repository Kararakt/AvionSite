import { counterItems } from "./UtilityHelper";
import { itemsView } from "./ProductHelper";
import { sumBy } from "lodash";

export const basketItems = ref<counterItems<itemsView>[]>([]);

export const addItemToBasket = (item: itemsView, count: number) => {
  basketItems.value.push({ item, count: count });
};

export const removeItemFromBasket = (item: counterItems<itemsView>) => {
  const index = basketItems.value.indexOf(item);
  if (index > -1) {
    basketItems.value.splice(index, 1);
  }
};

export const basketHasItems = computed(() => basketItems.value.length > 0);

export const total = computed(() =>
  sumBy(basketItems.value, (item) => item.item.cost * item.count)
);
