import styles from './Button.module.scss'
import cn from 'classnames'
import cnBind from 'classnames/bind'
const cx = cnBind.bind(styles)

const Button = ({ children, kind, size, wide, rounded = 'rounded' }, ...props) => {
    return (
        <button className={
            cn(cx([
                `button`,
                `size-${size}`,
                `button-${kind}`,
                wide && `button-wide`,
                rounded && `br-${rounded}`
            ])

            )} {...props}>
            {children}
        </button>
    )
}
export default Button