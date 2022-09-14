import clsx from 'clsx'
import SocialMedia from './SocialMedia'
import UkiAddress from './UkiAddress'
import UkiLogo from './UkiLogo'
import YarlItHubLogo from './YarlItHubLogo'


export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className, 
      'container mx-auto',
     'flex justify-center gap-5 items-center',
     'bg-slate-300')}>
      <div className='flex gap-14 items-center'>
       <YarlItHubLogo />
      <UkiLogo />
      <UkiAddress />
      </div>
     
    <div className='flex'> <SocialMedia /> </div> 
     
    </div>
  )
}

export default Footer
