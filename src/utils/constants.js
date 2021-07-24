import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FcHome, FcList, FcAssistant, FcAbout } from 'react-icons/fc'
import { MdLocationOn, MdCall, MdMail } from 'react-icons/md'

export const links = [
  {
    text: 'Home',
    path: '/',
    icon: <FcHome style={{ fontSize: '1.25rem' }} />,
  },
  {
    text: 'Menu',
    path: '/menu',
    icon: <FcList style={{ fontSize: '1.25rem' }} />,
  },
  {
    text: 'About us',
    path: '/about-us',
    icon: <FcAbout style={{ fontSize: '1.25rem' }} />,
  },
  {
    text: 'Contact us',
    path: '/contact-us',
    icon: <FcAssistant style={{ fontSize: '1.25rem' }} />,
  },
]

export const socials = [
  {
    icon: <FaFacebook />,
    link: 'https://www.facebook.com',
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com',
  },
  {
    icon: <FaGithub />,
    link: 'https://www.github.com',
  },
]

export const reviews = [
  {
    name: 'Franklin Lee',
    job: 'Chef',
    image:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    review:
      "I stumbled on this undiscovered gem right in our neighboorhood. This was one of the best mouth-watering milkshake I've had.",
  },
  {
    name: 'Ysabel Abraham',
    job: 'Food Critic',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=398&q=80',
    review: 'It was much better than I expected. The food was flavorful, savory, and succulent.',
  },
  {
    name: 'Olivia Trinidad',
    job: 'Waitress',
    image:
      'https://images.unsplash.com/photo-1555524554-0fdb51cd5020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80',
    review:
      'My taste buds are still tingling from our last visit! The entrees are simply to die for. I found the ambiance to be very charming.',
  },
  {
    name: 'Sammy Gray',
    job: 'Student',
    image:
      'https://images.unsplash.com/photo-1586459023690-8bda067ff1bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80',
    review:
      'Best experience ever! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile.',
  },
]

export const contacts = [
  {
    icon: <MdLocationOn />,
    text: '#25 Gray Street, Baguio City, Ph',
  },
  {
    icon: <MdCall />,
    text: '0925-555-5555',
  },
  {
    icon: <MdMail />,
    text: 'rv@example.com',
  },
]

export const about = [
  {
    slug: 'welcome',
    text: 'Welcome to SLURP',
  },
  {
    slug: 'careers',
    text: 'Careers',
  },
  {
    slug: 'delivery',
    text: 'Delivery',
  },
  {
    slug: 'payment',
    text: 'Payment Options',
  },
]
