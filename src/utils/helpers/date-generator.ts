export function generateDateInPast(daysInPast: number) {
  return new Date(new Date().setDate(new Date().getDate() - daysInPast))
}
