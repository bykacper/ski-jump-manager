import CareerPanel from '../../components/CareerPanel/CareerPanel';
import styles from './HomePage.module.css';

export default function HomePage() {
    return (
        <section className={styles.homePage}>
            <CareerPanel />
        </section>
    )
}