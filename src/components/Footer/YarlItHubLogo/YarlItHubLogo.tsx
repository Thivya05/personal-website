import clsx from 'clsx'
import yarlItHubLogo from './yarl-it-hub-logo.png'

export interface Props {
  className?: string
}

const YarlItHubLogo = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <img src={yarlItHubLogo} alt="yarl it hub logo" className='h-24' />
    </div>
  )
}

export default YarlItHubLogo
