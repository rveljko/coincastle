export function ethereumAddressFormatter(address: string) {
  if (!address) return

  if (!address.startsWith('0x')) return address

  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
