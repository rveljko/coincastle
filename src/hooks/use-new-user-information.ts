import { useUserInformation } from '@services/contexts/user-information-context'
import { User } from '@utils/types'
import { useState } from 'react'

export default function useNewUserInformation() {
  const { userInformation } = useUserInformation()

  const [newUserInformation, setNewUserInformation] = useState<User>({
    firstName: userInformation.firstName,
    lastName: userInformation.lastName,
    emailAddress: userInformation.emailAddress,
    phoneNumber: userInformation.phoneNumber,
    isTwoStepVerificationEnabled: userInformation.isTwoStepVerificationEnabled,
    password: userInformation.password,
    streetAddress: userInformation.streetAddress,
    city: userInformation.city,
    state: userInformation.state,
    zipCode: userInformation.zipCode,
  })

  return { newUserInformation, setNewUserInformation }
}
