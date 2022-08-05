import Head from 'next/head'
import 'bulma/css/bulma.css';
import styles from '../styles/VendingMachine.module.css';


export default function VendingMachine() {

    return (
        <div className={styles.main}>
            <Head>
                <title>vending machine App</title>
                <meta name="description" content="blockchain app" />

            </Head>
            <nav className="navbar mt-4 mb-4">
                <div className='container'>
                    <div className='navbar-brand'>
                        <h1>Vending machine</h1>
                    </div>
                    <div className='navbar-end'>
                        <button className='button is-primary'>
                            connect wallet
                        </button>
                    </div>
                </div>
            </nav>




            <section>
                <div className='container'>

                    <p>
                        placeholder text
                    </p>
                </div>
            </section>
        </div>
    )

}