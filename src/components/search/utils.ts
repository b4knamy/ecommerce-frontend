import { SiteSettings } from '../../context/settingsContext/context';
import { searchInitState } from '../../context/searchContext/context/context.type';

export function navigationArrayResolver(page: number, last: number): number[] {
  const searchArrayNavigation = [];
  let start, end;
  if (page <= 2) {
    [start, end] = [1, 5 > last ? last : 5];
  } else {
    if (page == last) {
      [start, end] = [page - 4, last];
    } else if (page == last - 1) {
      [start, end] = [page - 3, last];
    } else {
      [start, end] = [page - 2, page + 2];
    }
  }

  for (let x = start; x <= end; x++) {
    if (x > 0) {
      searchArrayNavigation.push(x);
    }
  }
  return searchArrayNavigation;
}

export function queryResolver(
  {
    filter_1,
    filter_2,
    filter_3,
    filter_4,
    filter_5,
    amount,
    order,
  }: searchInitState,
  settings: SiteSettings,
) {
  const params = new URLSearchParams();

  const { param_1, param_2, param_3, param_4, param_5 } = settings;

  if (filter_1.length !== 0) {
    params.set(param_1, String(filter_1));
  }
  if (filter_2.length !== 0) {
    params.set(param_2, String(filter_2));
  }
  if (filter_3.length !== 0) {
    params.set(param_3, String(filter_3));
  }
  if (filter_4.length !== 0) {
    params.set(param_4, String(filter_4));
  }
  if (filter_5.length !== 0) {
    params.set(param_5, String(filter_5));
  }
  if (amount[0].min) {
    params.set('min', String(amount[0].min));
  }
  if (amount[0].max) {
    params.set('max', String(amount[0].max));
  }
  if (order.length !== 0) {
    params.set('ordem', String(order));
  }

  return '?' + decodeURIComponent(params.toString());
}

export function urlPageNumberResolver(page: string) {
  const params = new URLSearchParams(location.search);
  params.set('page', String(page));
  return '?' + decodeURIComponent(params.toString());
}

export const scrollUpWhenNav = () =>
  document
    .querySelector("[content='navbar']")
    ?.scrollIntoView({ behavior: 'smooth' });
