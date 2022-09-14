import clsx from 'clsx'
import {ReactComponent as FacebookLogo} from './facebook-logo.svg'
import {ReactComponent as GithubLogo} from './github-logo.svg'

export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'flex justify-center items-center')}>

      <ul className='flex gap-3 fill-current '>
        <li>
          <a href="https://tailwindcss.com/docs/display#block-and-inline">
          <FacebookLogo />
            </a> </li>

            <li>
          <a href="https://tailwindcss.com/docs/display#block-and-inline">
          <GithubLogo />
            </a> </li>
      </ul>

        

    </div>
  )
}

export default SocialMedia
