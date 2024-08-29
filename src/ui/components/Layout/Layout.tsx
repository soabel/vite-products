import {  useState } from "react";
import styles from './layout.module.css'
import { Header, Navbar, Sidebar } from "../components";
import { LayoutProps } from "./layout.props";

export const Layout: React.FC<LayoutProps> = (props) => {

    const [isVisible, isVisibleSet] = useState<boolean>(false)
    const onToggleSidebar = () => {
        isVisibleSet(!isVisible);
    }
    return (<>
        <div className={styles.app}>
            <Header className={styles.header} onToggleSidebar={onToggleSidebar} />
            <main className={styles.main}>
                {props.children}
            </main>
            <footer className={styles.footer}>
                <p>Footer Content</p>
            </footer>
            <Sidebar isVisible={isVisible} className={`md:hidden ${isVisible ? styles.visible : styles.hidden} ${styles.sidebar}`} />
            <Navbar className={`hidden md:flex ${styles.navbar}`}></Navbar>
        </div>
    </>)
}