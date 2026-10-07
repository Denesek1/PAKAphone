import { mockPhones } from './data/mockPhones';
import type { Phone, PhoneStatus } from './types/phone';
import './App.css';

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

function getStatusLabel(status: PhoneStatus): string {
  switch (status) {
    case 'new':
      return 'Новинка';
    case 'actual':
      return 'Актуальная';
    case 'old':
      return 'Устаревшая';
    case 'out':
      return 'Нет в наличии';
  }
}

function App() {
  const total = mockPhones.length;
  const avgPrice = Math.round(
    mockPhones.reduce((sum, p) => sum + p.price, 0) / total
  );
  const inStockCount = mockPhones.filter((p) => p.inStock).length;

  return (
    <div className="app">
      <header className="header">
        <h1>📱 PAKAphon</h1>
        <p>Магазин смартфонов с умным поиском</p>
      </header>

      <section className="summary">
        <div className="card">
          <span className="value">{total}</span>
          <span className="label">моделей в каталоге</span>
        </div>
        <div className="card">
          <span className="value">{avgPrice.toLocaleString('ru-RU')} ₽</span>
          <span className="label">средняя цена</span>
        </div>
        <div className="card">
          <span className="value">{inStockCount}</span>
          <span className="label">в наличии</span>
        </div>
      </section>

      <section className="phone-list">
        <h2>Каталог</h2>
        {mockPhones.map((phone) => {
          const status = getStatus(phone);
          return (
            <article key={phone.id} className="phone-card">
              <div className="phone-emoji">{phone.emoji}</div>
              <div className="phone-info">
                <h3>
                  {phone.name}{' '}
                  <span className={`badge badge-${status}`}>
                    {getStatusLabel(status)}
                  </span>
                </h3>
                <p className="brand">{phone.brand}</p>
                <p className="description">{phone.description}</p>
                <p className="price">{phone.price.toLocaleString('ru-RU')} ₽</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;