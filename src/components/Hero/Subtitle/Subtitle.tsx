import clsx from 'clsx'
import Typed from 'react-typed'


export interface Props {
  className?: string
}

const Subtitle = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'mt-0')}>
     <Typed 
     className='flex justify-center text-2xl'
     strings={['Front-end Develper','React Developer','UKI Student']}
     loop
     
     />
    </div>
  )
}

export default Subtitle
