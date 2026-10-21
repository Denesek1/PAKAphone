import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export function NotFoundPage() {
  return (
    <div className="app">
      <PageHeader
        title="Страница не найдена"
        subtitle="Такой страницы не существует."
      />
      <Link to="/">Вернуться</Link>
    </div>
  );
}