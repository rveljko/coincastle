import FormField from '@components/dashboard-components/ui/form-field'
import Button from '@components/ui/button'
import useNewUserInformation from '@hooks/use-new-user-information'
import { useUserInformation } from '@services/contexts/user-information-context'
import {
  lettersAndNumbersMask,
  onlyLettersMask,
  onlyNumbersMask,
  phoneMask,
  phoneMaskCleaner,
} from '@utils/helpers/input-masks'
import displayToast from '@utils/toast'
import { useState } from 'react'

export default function AccountSection() {
  const { userInformation, updateUserInformation } = useUserInformation()
  const { isUserInformationSame, newUserInformation, setNewUserInformation } =
    useNewUserInformation()
  const [maskedFormFields, setMaskedFormFields] = useState({
    phoneNumber: phoneMask(userInformation.phoneNumber.toString()),
    zipCode: onlyNumbersMask(userInformation.zipCode.toString()),
  })

  const isButtonDisabled =
    isUserInformationSame ||
    newUserInformation.phoneNumber.toString().length < 10

  return (
    <section className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault()

          updateUserInformation(newUserInformation)
          displayToast('Updated Successfully!')
        }}
      >
        <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
          Personal Information
        </h2>
        <div className="mb-4 flex flex-wrap gap-2">
          <FormField className="grow">
            <FormField.Label htmlFor="first-name">First Name</FormField.Label>
            <FormField.Input
              id="first-name"
              type="text"
              placeholder={userInformation.firstName}
              value={newUserInformation.firstName}
              onChange={(e) =>
                setNewUserInformation({
                  ...newUserInformation,
                  firstName: onlyLettersMask(e.target.value),
                })
              }
            />
          </FormField>
          <FormField className="grow">
            <FormField.Label htmlFor="last-name">Last Name</FormField.Label>
            <FormField.Input
              id="last-name"
              type="text"
              placeholder={userInformation.lastName}
              value={newUserInformation.lastName}
              onChange={(e) =>
                setNewUserInformation({
                  ...newUserInformation,
                  lastName: onlyLettersMask(e.target.value),
                })
              }
            />
          </FormField>
          <FormField className="grow">
            <FormField.Label htmlFor="email-address">
              Email Address
            </FormField.Label>
            <FormField.Input
              id="email-address"
              type="email"
              placeholder={userInformation.emailAddress}
              value={newUserInformation.emailAddress}
              onChange={(e) =>
                setNewUserInformation({
                  ...newUserInformation,
                  emailAddress: e.target.value,
                })
              }
            />
          </FormField>
          <FormField className="grow">
            <FormField.Label htmlFor="phone-number">
              Phone Number
            </FormField.Label>
            <FormField.Input
              id="phone-number"
              type="tel"
              placeholder={phoneMask(userInformation.phoneNumber.toString())}
              value={maskedFormFields.phoneNumber}
              onChange={(e) => {
                setMaskedFormFields({
                  ...maskedFormFields,
                  phoneNumber: phoneMask(e.target.value),
                })
                setNewUserInformation({
                  ...newUserInformation,
                  phoneNumber: phoneMaskCleaner(e.target.value),
                })
              }}
            />
          </FormField>
        </div>
        <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
          Address
        </h2>
        <div className="mb-4 flex flex-wrap gap-2">
          <FormField className="grow">
            <FormField.Label htmlFor="street-address">
              Street Address
            </FormField.Label>
            <FormField.Input
              id="street-address"
              type="text"
              placeholder={userInformation.streetAddress}
              value={newUserInformation.streetAddress}
              onChange={(e) =>
                setNewUserInformation({
                  ...newUserInformation,
                  streetAddress: lettersAndNumbersMask(e.target.value),
                })
              }
            />
          </FormField>
          <FormField className="grow">
            <FormField.Label htmlFor="city">City</FormField.Label>
            <FormField.Input
              id="city"
              type="text"
              placeholder={userInformation.city}
              value={newUserInformation.city}
              onChange={(e) =>
                setNewUserInformation({
                  ...newUserInformation,
                  city: onlyLettersMask(e.target.value),
                })
              }
            />
          </FormField>
          <FormField className="grow">
            <FormField.Label htmlFor="state">State</FormField.Label>
            <FormField.Input
              id="state"
              type="text"
              maxLength={2}
              minLength={2}
              autoCapitalize="characters"
              placeholder={userInformation.state}
              value={newUserInformation.state}
              onChange={(e) =>
                setNewUserInformation({
                  ...newUserInformation,
                  state: onlyLettersMask(e.target.value).toLocaleUpperCase(),
                })
              }
            />
          </FormField>
          <FormField className="grow">
            <FormField.Label htmlFor="zip-code">Zip Code</FormField.Label>
            <FormField.Input
              id="zip-code"
              type="tel"
              maxLength={5}
              placeholder={userInformation.zipCode.toString()}
              value={maskedFormFields.zipCode}
              onChange={(e) => {
                setMaskedFormFields({
                  ...maskedFormFields,
                  zipCode: onlyNumbersMask(e.target.value),
                })
                setNewUserInformation({
                  ...newUserInformation,
                  zipCode: parseInt(e.target.value),
                })
              }}
            />
          </FormField>
        </div>
        <Button
          variant="primary"
          size="large"
          disabled={isButtonDisabled}
          className="ml-auto"
        >
          Save Changes
        </Button>
      </form>
    </section>
  )
}
