import { useEffect, useState } from 'react';
import type { Phone, PhoneStatus } from '../types/phone';
import { fetchPhonesMock } from '../mocks/dashboardMock';
import { PageHeader } from '../components/PageHeader';
import { DashboardStats } from '../components/DashboardStats';
import { PhoneTable } from '../components/PhoneTable';
import { EmptyState } from '../components/EmptyState';

const TODAY = new Date('2026-03-01');

function getStatus(phone: Phone): PhoneStatus {
  if (!phone.inStock) return 'out';
  const release = new Date(phone.releaseDate);
  const months =
    (TODAY.getFullYear() - release.getFullYear()) * 12 +
    (TODAY.getMonth() - release.getMonth());

  if (months < 6) return 'new';
  if (months < 24) return 'actual';
  return 'old';
}

export function DashboardPage() {
  const [items, setItems] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    fetchPhonesMock()
      .then((data) => {
        if (!isActive) return;
        setItems(data);
        setIsLoading(false);
      })
      .catch(() => {
        if (!isActive) return;
        setError('Не удалось загрузить каталог');
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const inStockCount = items.filter((p) => p.inStock).length;
  const avgPrice =
    items.length > 0
      ? Math.round(items.reduce((sum, p) => sum + p.price, 0) / items.length)
      : 0;

  return (
    <div className="app">
      <PageHeader
        title="📱 PAKAphon"
        subtitle="Магазин смартфонов с умным поиском"
        tag="mock-данные"
      />

      {isLoading && <EmptyState message="Загрузка каталога..." />}
      {error && <EmptyState message={error} />}

      {!isLoading && !error && (
        <>
          <DashboardStats
            itemsCount={items.length}
            inStockCount={inStockCount}
            avgPrice={avgPrice}
          />
          <section>
            <h2>Каталог</h2>
            <PhoneTable phones={items} getStatus={getStatus} />
          </section>
        </>
      )}
    </div>
  );
}