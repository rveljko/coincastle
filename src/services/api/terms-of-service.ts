export async function getTermsOfService() {
  const res = await fetch('/terms-of-service.md')
  return res.text()
}
