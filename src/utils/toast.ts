import CircleCheckIcon from '@icons/circle-check-icon'
import { toast as toastify, ToastOptions } from 'react-toastify'

export default function displayToast(text: string) {
  return successToast(text)
}

const options: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
  icon: CircleCheckIcon,
  style: { fontFamily: 'var(--font-primary)' },
}

function successToast(text: string) {
  return toastify.success(text, {
    ...options,
    style: {
      ...options.style,
      backgroundColor: 'var(--color-success-600)',
    },
  })
}
