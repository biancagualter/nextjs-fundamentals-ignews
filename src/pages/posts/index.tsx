import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>2 de abril de 2021</time>
                        <strong>Creating a Monorepo with Lenna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nihil iusto tempora veniam dolorum sapiente assumenda laborum.
                        </p>
                    </a>
                    <a href="">
                        <time>2 de abril de 2021</time>
                        <strong>Creating a Monorepo with Lenna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nihil iusto tempora veniam dolorum sapiente assumenda laborum.
                        </p>
                    </a>
                    <a href="">
                        <time>2 de abril de 2021</time>
                        <strong>Creating a Monorepo with Lenna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nihil iusto tempora veniam dolorum sapiente assumenda laborum.
                        </p>
                    </a>
                    <a href="">
                        <time>2 de abril de 2021</time>
                        <strong>Creating a Monorepo with Lenna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nihil iusto tempora veniam dolorum sapiente assumenda laborum.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}