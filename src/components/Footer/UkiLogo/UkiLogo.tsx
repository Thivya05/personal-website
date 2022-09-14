import clsx from 'clsx'
import ukilogo from './uki-logo.png'

export interface Props {
  className?: string
}

const UkiLogo = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'flex justify-center')}>
      <img src={ukilogo} alt="uki logo" className='h-24'/>
    </div>
  )
}

export default UkiLogo
