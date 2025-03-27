export async function getGuide(guide: string) {
  const res = await fetch(`/guides/${guide}.md`)
  return res.text()
}
