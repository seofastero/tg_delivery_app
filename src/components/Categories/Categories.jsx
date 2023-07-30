import styles from './Categories.module.scss'
const Categories = () => {
    const category = [
        {
            id: 1,
            name: 'pizza',
            link: 'pizza'
        },
        {
            id: 2,
            name: 'pizza',
            link: 'pizza'
        },
        {
            id: 3,
            name: 'pizza',
            link: 'pizza'
        },
        {
            id: 4,
            name: 'pizza',
            link: 'pizza'
        },
        {
            id: 5,
            name: 'pizza',
            link: 'pizza'
        },
        {
            id: 6,
            name: 'pizza',
            link: 'pizza'
        },
    ]
    return (
        <div className={styles.categories}>
            <ul className={styles.list}>
                {category.map((category) =>
                    <li className={styles.category}>
                        {category.name}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Categories