import { Card } from './Card';

interface DashboardStatsProps {
  itemsCount: number;
  inStockCount: number;
  avgPrice: number;
}

export function DashboardStats({
  itemsCount,
  inStockCount,
  avgPrice,
}: DashboardStatsProps) {
  return (
    <section className="stats">
      <Card value={itemsCount} label="моделей в каталоге" />
      <Card value={inStockCount} label="в наличии" />
      <Card
        value={`${avgPrice.toLocaleString('ru-RU')} ₽`}
        label="средняя цена"
      />
    </section>
  );
}