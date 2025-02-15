import FormField from '@components/dashboard-components/ui/form-field'

export default function AccountSection() {
  return (
    <section className="w-full">
      <form>
        <h2 className="text-heading-4-font-size mb-2">Personal Information</h2>
        <div className="mb-4 flex flex-wrap gap-2">
          <FormField>
            <FormField.Label htmlFor="first-name">First Name</FormField.Label>
            <FormField.Input id="first-name" type="text" placeholder="James" />
          </FormField>
          <FormField>
            <FormField.Label htmlFor="last-name">Last Name</FormField.Label>
            <FormField.Input
              id="last-name"
              type="text"
              placeholder="Williams"
            />
          </FormField>
          <FormField>
            <FormField.Label htmlFor="email-address">
              Email Address
            </FormField.Label>
            <FormField.Input
              id="email-address"
              type="text"
              placeholder="jameswilliams@coincastle.com"
            />
          </FormField>
          <FormField>
            <FormField.Label htmlFor="phone-number">
              Phone Number
            </FormField.Label>
            <FormField.Input
              id="phone-number"
              type="tel"
              placeholder="(069) 420-1337"
            />
          </FormField>
        </div>
        <h2 className="text-heading-4-font-size mb-2">Address</h2>
        <div className="mb-4 flex flex-wrap gap-2">
          <FormField>
            <FormField.Label htmlFor="street-address">
              Street Address
            </FormField.Label>
            <FormField.Input
              id="street-address"
              type="text"
              placeholder="2345 Maple Avenue"
            />
          </FormField>
          <FormField>
            <FormField.Label htmlFor="city">City</FormField.Label>
            <FormField.Input id="city" type="text" placeholder="Brooklyn" />
          </FormField>
          <FormField>
            <FormField.Label htmlFor="state">State</FormField.Label>
            <FormField.Input
              id="state"
              type="text"
              placeholder="NY"
              maxLength={2}
            />
          </FormField>
          <FormField>
            <FormField.Label htmlFor="zip-code">Zip Code</FormField.Label>
            <FormField.Input
              id="zip-code"
              type="text"
              placeholder="11230"
              maxLength={5}
            />
          </FormField>
        </div>
      </form>
    </section>
  )
}
