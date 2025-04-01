import FormField from '@components/dashboard-components/ui/form-field'
import Switch from '@components/dashboard-components/ui/switch'
import Button from '@components/ui/button'
import useNewUserInformation from '@hooks/use-new-user-information'
import EyeIcon from '@icons/eye-icon'
import EyeOffIcon from '@icons/eye-off-icon'
import { useUserInformation } from '@services/contexts/user-information-context'
import displayToast from '@utils/toast'
import { useState } from 'react'

export default function PasswordSection() {
  const { updateUserInformation } = useUserInformation()
  const { isUserInformationSame, newUserInformation, setNewUserInformation } =
    useNewUserInformation()
  const [showPassword, setShowPassword] = useState(false)

  const isButtonDisabled = isUserInformationSame

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
          Security
        </h2>
        <FormField className="mb-4">
          <FormField.Label htmlFor="password">Password</FormField.Label>
          <FormField.Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            minLength={8}
            rightIcon={
              <button
                className="text-neutral-100 hover:cursor-pointer"
                type="button"
                role="switch"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span className="sr-only">
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </span>
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            }
            value={newUserInformation.password}
            onChange={(e) =>
              setNewUserInformation({
                ...newUserInformation,
                password: e.target.value,
              })
            }
          />
        </FormField>
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h2 className="text-heading-4-font-size leading-heading-4-line-height">
              2 Step Verification
            </h2>
            <p className="max-w-52">
              Adds an extra security step to your login process
            </p>
          </div>
          <Switch
            checked={newUserInformation.isTwoStepVerificationEnabled}
            onChange={() => {
              setNewUserInformation({
                ...newUserInformation,
                isTwoStepVerificationEnabled:
                  !newUserInformation.isTwoStepVerificationEnabled,
              })
            }}
          />
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
