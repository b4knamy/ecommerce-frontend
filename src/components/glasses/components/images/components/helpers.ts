export function hidePush(element: HTMLDivElement | null) {
  if (element instanceof HTMLDivElement) {
    element.style.visibility = 'hidden';
  }
}
export function showPush(element: HTMLDivElement | null) {
  if (element instanceof HTMLDivElement) {
    element.style.visibility = 'visible';
  }
}
