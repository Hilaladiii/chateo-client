export function emailAtConverter(email: string) {
  return email.replace(/%40/g, "@");
}
