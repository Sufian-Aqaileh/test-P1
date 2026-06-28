export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}
