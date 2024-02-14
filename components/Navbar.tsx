import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.links}>
          <Link href="/" className={styles.links}>
            HOME 🏠
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.links}>
            ABOUT 👋
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.links}>
            CONTACT ☎️
          </Link>
        </li>
        <li>
          <Link href="/shop" className={styles.links}>
            SHOP 🛒
          </Link>
        </li>
        <li>
          <Link href="/sign-in" className={styles.links && "special"}>
            Login / Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
