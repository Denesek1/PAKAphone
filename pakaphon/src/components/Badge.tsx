import type { PhoneStatus } from '../types/phone';

interface BadgeProps {
  status: PhoneStatus;
}

const labels: Record<PhoneStatus, string> = {
  new: 'Новинка',
  actual: 'Актуальная',
  old: 'Устаревшая',
  out: 'Нет в наличии',
};

export function Badge({ status }: BadgeProps) {
  return <span className={`badge badge--${status}`}>{labels[status]}</span>;
}