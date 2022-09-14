import clsx from 'clsx'
import profile from './thiviya-profile.png'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
     <img src={profile} alt="profile" className='h-40 m-auto'/>
    </div>
  )
}

export default Avatar
