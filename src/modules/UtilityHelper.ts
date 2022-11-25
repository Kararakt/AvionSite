export interface counterItems<T> {
  item: T;
  count: number;
}

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
