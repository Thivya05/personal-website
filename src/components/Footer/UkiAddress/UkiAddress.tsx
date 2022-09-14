import clsx from 'clsx'

export interface Props {
  className?: string
}

const UkiAddress = ({ className }: Props) => {
  return (
    <div className={clsx(className,
      'flex-1',
      'pt-8',
     ' min-w-fit',
     'text-black'
     )}>
      <div>Uki Coding School - Kilinochchi Center    </div>
      <div>No.423, Kilinochchi 44000, Sri Lanka.</div>
      <div>Phone: 0212 284 647</div>
    </div>
  )
}

export default UkiAddress
