export function onlyLettersMask(value: string) {
  return value.replace(/[^A-Za-z\s]/g, '')
}

export function onlyNumbersMask(value: string) {
  return value.replace(/\D/g, '')
}

export function lettersAndNumbersMask(value: string) {
  return value.replace(/[^A-Za-z0-9\s]/g, '')
}

export function phoneMask(value: string) {
  const phoneNumber = onlyNumbersMask(value)

  if (phoneNumber.length < 4) return phoneNumber

  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`
}

export function phoneMaskCleaner(value: string) {
  return parseInt(value.replace(/[()\s-]/g, ''))
}
