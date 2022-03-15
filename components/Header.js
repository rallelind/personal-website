import Link from "next/link"
import { Text, Avatar } from '@nextui-org/react'
import stylesHeader from "../styles/Header.module.css"

const Header = () => {
    return (
        <nav className={stylesHeader.nav}>
            <ul>
                <li>
                    <Text
                        h4
                    >
                        <Link href="/">Home</Link>
                    </Text>
                </li>
                <li>
                    <Text
                        h4
                    >
                        <Link href="/about">About</Link>
                    </Text>
                </li>
                <li>
                    <Text
                        h4
                    >
                        <Link href="/projects">Projects</Link>
                    </Text>
                </li>
            </ul>
            <ul>
                <li>
                    <Avatar src="/avatar-picture.JPG" size="xl" color="gradient" bordered />
                </li>
            </ul>
        </nav>
    )
}

export default Header