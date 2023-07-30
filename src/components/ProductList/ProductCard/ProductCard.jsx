import styles from './ProductCard.module.scss'
import convertPrice from '../../../utils/convertPrice'
import Button from '../../Button/Button'
const ProductCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src='https://i.ibb.co/QcVHQ02/burger9.jpg' alt='product' />
            </div>
            <div className={styles.description}>
                <span className={styles.title}>
                    The House Burger
                </span>
                <span className={styles.price}>
                    {convertPrice(12)}/pcs
                </span>
                <div className={styles.actions_slot}>
                    <Button kind={'primary'} >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172V3.84172Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Button>
                    <Button kind={'secondary'}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.28564 4.16663H18.5714L17.1428 12.7381H5.71422L4.28564 4.16663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.14281 17.5C7.6688 17.5 8.09519 17.0736 8.09519 16.5476C8.09519 16.0216 7.6688 15.5952 7.14281 15.5952C6.61683 15.5952 6.19043 16.0216 6.19043 16.5476C6.19043 17.0736 6.61683 17.5 7.14281 17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.7143 17.5C16.2403 17.5 16.6667 17.0736 16.6667 16.5476C16.6667 16.0216 16.2403 15.5952 15.7143 15.5952C15.1884 15.5952 14.762 16.0216 14.762 16.5476C14.762 17.0736 15.1884 17.5 15.7143 17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.28561 4.16663H1.42847" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </Button>
                </div>
            </div>

        </div>
    )
}
export default ProductCard