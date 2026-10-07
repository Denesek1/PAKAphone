import type { Phone, PhoneStatus } from '../types/phone';
import { Badge } from './Badge';

interface PhoneTableProps {
  phones: Phone[];
  getStatus: (phone: Phone) => PhoneStatus;
}

export function PhoneTable({ phones, getStatus }: PhoneTableProps) {
  return (
    <table className="phone-table">
      <thead>
        <tr>
          <th>Модель</th>
          <th>Бренд</th>
          <th>Цена</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {phones.map((phone) => (
          <tr key={phone.id}>
            <td>
              {phone.emoji} {phone.name}
            </td>
            <td>{phone.brand}</td>
            <td>{phone.price.toLocaleString('ru-RU')} ₽</td>
            <td>
              <Badge status={getStatus(phone)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}