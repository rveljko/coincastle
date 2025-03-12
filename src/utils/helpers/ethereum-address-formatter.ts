import { ethereumAddressValidator } from '@utils/helpers/ethereum-address-validator'

export function ethereumAddressFormatter(address: string) {
  if (!address) return

  if (!ethereumAddressValidator(address)) return address

  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
