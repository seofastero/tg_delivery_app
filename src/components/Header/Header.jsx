import Button from "../Button/Button"
import './Header.css'
const Header = (props) => {
    return (
        <div className='header' {...props}>
            <Button >Закрыть</Button>
            <span className={'username'}>

            </span>
        </div>
    )
}
export default Header