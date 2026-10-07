interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export function PageHeader({ title, subtitle, tag }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header__top">
        <h1 className="page-header__title">{title}</h1>
        {tag && <span className="page-header__tag">{tag}</span>}
      </div>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
    </header>
  );
}