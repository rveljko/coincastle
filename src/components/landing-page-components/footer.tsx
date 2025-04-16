import Container from '@components/container'
import Logo from '@components/logo'
import { guides } from '@data/guides'
import BrandLinkedinIcon from '@icons/brand-linkedin-icon'
import BrandXIcon from '@icons/brand-x-icon'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-section-outline bg-background-starting-color/40 border-t py-16">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-wrap justify-between gap-8">
          <Link to="/" className="h-max">
            <Logo withText />
          </Link>
          <nav className="flex flex-wrap gap-4">
            <div>
              <p className="mb-2">Company</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/customers">Customers</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/security">Security</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2">Product</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/integrations">Integrations</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2">Guides</p>
              <ul className="space-y-2">
                {guides.map(({ title, url }) => (
                  <li key={title}>
                    <Link to={`/dashboard/guide/${url}`}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <p>© Copyright {new Date().getFullYear()} - All rights reserved</p>
          <div className="flex gap-2">
            <Link to="/">
              <BrandXIcon />
            </Link>
            <Link to="/">
              <BrandLinkedinIcon />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
