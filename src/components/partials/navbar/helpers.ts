export const hideItemsGroup = (element: HTMLDivElement | null) => {
  if (element instanceof HTMLDivElement) {
    element.style.display = 'none';
  }
};

export const showItemsGroup = (element: HTMLDivElement | null) => {
  if (element instanceof HTMLDivElement) {
    element.style.display = 'flex';
  }
};
