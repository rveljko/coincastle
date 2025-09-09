export function ethereumAddressValidator(address: string) {
  if (!address) return

  return address.startsWith('0x')
}
