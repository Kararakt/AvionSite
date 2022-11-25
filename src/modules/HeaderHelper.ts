export const closeDeliveryHeader = ref(false);
export const closeDelivery = () => {
  closeDeliveryHeader.value = !closeDeliveryHeader.value;
};
export let menuActive = ref(false);
export const activeHeader = () => {
  menuActive.value = !menuActive.value;
};

export const watchScroll = () => {
  if (menuActive.value === true) {
    document.body.classList.toggle("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};
