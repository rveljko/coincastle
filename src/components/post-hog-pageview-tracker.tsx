import { usePostHog } from 'posthog-js/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function PostHogPageviewTracker() {
  const location = useLocation()
  const posthog = usePostHog()

  useEffect(() => {
    if (posthog) {
      posthog.capture('$pageview')
    }
  }, [location, posthog])

  return null
}
