import type { Phone } from '../types/phone';
import { mockPhones } from '../data/mockPhones';

export function fetchPhonesMock(): Promise<Phone[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockPhones]);
    }, 700);
  });
}