export async function getPrivacyPolicy() {
  const res = await fetch('/privacy-policy.md')
  return res.text()
}
