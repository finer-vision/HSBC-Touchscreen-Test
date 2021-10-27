export function asset(url: string): string {
  return url.replace(/^\//, "");
}
