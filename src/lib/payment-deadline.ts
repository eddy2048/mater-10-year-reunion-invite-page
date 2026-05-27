export const PAYMENT_DEADLINE_ISO = "2026-05-27T00:00:00-04:00";
export const PAYMENT_DEADLINE_LABEL = "May 27, 2026 at 12:00 AM ET";

export const PAYMENT_DEADLINE_TIMESTAMP = new Date(
  PAYMENT_DEADLINE_ISO
).getTime();

export function getPaymentDeadlineRemainingMs(now = Date.now()): number {
  return Math.max(0, PAYMENT_DEADLINE_TIMESTAMP - now);
}

export function isPaymentDeadlineExpired(now = Date.now()): boolean {
  return now >= PAYMENT_DEADLINE_TIMESTAMP;
}
