export function ethereumAddressValidator(address: string) {
  return address.startsWith('0x')
}
