import { FaPaypal } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import { GiCash } from 'react-icons/gi'
import { AiFillBank } from 'react-icons/ai'

export const payment = [
  {
    method: 'Paypal',
    icon: <FaPaypal />,
  },
  {
    method: 'Credit card',
    icon: <MdPayment />,
  },
  {
    method: 'Cash',
    icon: <GiCash />,
  },
  {
    method: 'Bank deposit',
    icon: <AiFillBank />,
  },
]
