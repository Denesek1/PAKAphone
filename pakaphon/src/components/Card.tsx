interface CardProps {
  value: string | number;
  label: string;
}

export function Card({ value, label }: CardProps) {
  return (
    <div className="card">
      <span className="card__value">{value}</span>
      <span className="card__label">{label}</span>
    </div>
  );
}