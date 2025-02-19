import FormField from '@components/dashboard-components/ui/form-field'
import Button from '@components/ui/button'
import BrandLinkedinIcon from '@icons/brand-linkedin-icon'
import BrandXIcon from '@icons/brand-x-icon'
import MailIcon from '@icons/mail-icon'
import SendIcon from '@icons/send-icon'
import { useState } from 'react'

export default function ContactUsSection() {
  const initialFormFields = {
    subject: '',
    message: '',
  }
  const [formFields, setFormFields] = useState(initialFormFields)
  const isButtonDisabled = !formFields.subject || !formFields.message

  return (
    <section>
      <h2 className="text-heading-4-font-size mb-2">Contact Us</h2>
      <div className="flex flex-wrap gap-2">
        <form
          className="w-full max-w-(--input-max-width)"
          onSubmit={(e) => {
            e.preventDefault()

            setFormFields(initialFormFields)
          }}
        >
          <FormField className="mb-2">
            <FormField.Label htmlFor="subject">Subject</FormField.Label>
            <FormField.Input
              id="subject"
              placeholder="Bug Report"
              value={formFields.subject}
              onChange={(e) =>
                setFormFields({ ...formFields, subject: e.target.value })
              }
            ></FormField.Input>
          </FormField>
          <FormField className="mb-2">
            <FormField.Label htmlFor="message">Message</FormField.Label>
            <FormField.TextArea
              id="message"
              placeholder="I've found a bug when..."
              value={formFields.message}
              onChange={(e) =>
                setFormFields({ ...formFields, message: e.target.value })
              }
            />
          </FormField>
          <Button
            variant="primary"
            size="large"
            leftIcon={<SendIcon />}
            disabled={isButtonDisabled}
            className="w-full"
          >
            Send Message
          </Button>
        </form>
        <div>
          <p className="mb-2 max-w-76">
            If you prefer social media, contact us there for quick support and
            engagement.
          </p>
          <ul>
            <li>
              <Button
                href="#"
                variant="link"
                size="medium"
                leftIcon={<BrandXIcon />}
                className="pl-0"
              >
                @coincastle
              </Button>
            </li>
            <li>
              <Button
                href="#"
                variant="link"
                size="medium"
                leftIcon={<BrandLinkedinIcon />}
                className="pl-0"
              >
                @coincastle
              </Button>
            </li>
            <li>
              <Button
                href="#"
                variant="link"
                size="medium"
                leftIcon={<MailIcon />}
                className="pl-0"
              >
                support@coincastle.com
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
