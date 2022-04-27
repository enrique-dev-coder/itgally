import Link from 'next/link'
import Arrow from "./Arrow"

const BtnArrow = ({address, aStyles, btnText}) => {
    return (
        <Link href={address}>
            <a className={aStyles}>
                {btnText}
                <Arrow rotation="rotate(45deg)" />
            </a>
        </Link>
    )
}

export default BtnArrow