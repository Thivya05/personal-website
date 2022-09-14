import clsx from 'clsx'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <div className={clsx(className,
     'flex justify-center',
     'mb-1',
     'text-5xl',
     'font-accent',

     '-rotate-12 transform-gpu ',
     '-translate-y-11'
     )}>
      <div>V.Thivya</div>
    </div>
  )
}

export default Title
