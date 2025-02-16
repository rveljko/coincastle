import { integrations as defaultIntegrations } from '@data/integrations'
import { Integration } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type IntegrationsContextProviderProps = {
  children: React.ReactNode
}

type IntegrationsContextType = {
  integrationIds: number[]
  getSortedIntegrations: () => Integration[]
  addIntegrationId: (id: number) => void
  removeIntegrationIds: () => void
  updateIntegrationStatus: (id: number) => void
}

export const IntegrationsContext =
  createContext<IntegrationsContextType | null>(null)

function getInitialIntegrations() {
  const integrations = localStorage.getItem('integrations')
  return integrations ? JSON.parse(integrations) : defaultIntegrations
}

export default function IntegrationsContextProvider({
  children,
}: IntegrationsContextProviderProps) {
  const [integrations, setIntegrations] = useState<Integration[]>(
    getInitialIntegrations
  )
  const [integrationIds, setIntegrationIds] = useState<number[]>([])

  function getSortedIntegrations() {
    return integrations.sort((a, b) => a.id - b.id)
  }

  function getIntegrationById(id: number) {
    return integrations.find((integration) => integration.id === id)!
  }

  function addIntegrationId(id: number) {
    setIntegrationIds((prevIntegrationIds) => {
      if (prevIntegrationIds.includes(id)) {
        return [...prevIntegrationIds].filter(
          (prevIntegrationId) => prevIntegrationId !== id
        )
      }

      return [...prevIntegrationIds, id]
    })
  }

  function removeIntegrationIds() {
    setIntegrationIds([])
  }

  function updateIntegrationStatus(id: number) {
    setIntegrations((prevIntegrations) => {
      const matchingIntegration = getIntegrationById(id)

      return [
        ...prevIntegrations.filter(
          (prevIntegration) => prevIntegration.id !== id
        ),
        { ...matchingIntegration, isActive: !matchingIntegration.isActive },
      ]
    })
  }

  useEffect(() => {
    localStorage.setItem('integrations', JSON.stringify(integrations))
  }, [integrations])

  return (
    <IntegrationsContext.Provider
      value={{
        integrationIds,
        getSortedIntegrations,
        addIntegrationId,
        removeIntegrationIds,
        updateIntegrationStatus,
      }}
    >
      {children}
    </IntegrationsContext.Provider>
  )
}

export const useIntegrations = () => {
  const context = useContext(IntegrationsContext)

  if (!context) {
    throw new Error(
      'useIntegrations must be within a IntegrationsContextProvider'
    )
  }

  return context
}
