import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title'
import Typed from './Subtitle'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className,
    'flex-col'
    
    )}>
      <Avatar />
      <Title />
      <Typed />
    </div>
  )
}

export default Hero
