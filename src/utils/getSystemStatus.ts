import { CRITICAL_TEMPERATURE, WARNING_TEMPERATURE } from '@/constants/system';

export function getSystemStatus(temp: number) {
  if (temp > CRITICAL_TEMPERATURE) return 'critical';
  if (temp > WARNING_TEMPERATURE) return 'warning';

  return 'normal';
}
