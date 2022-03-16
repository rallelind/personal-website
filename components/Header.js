import Link from "next/link"
import { Text, Avatar } from '@nextui-org/react'
import stylesHeader from "../styles/Header.module.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Header = () => {
    return (
        <nav className={stylesHeader.nav}>
            <ul>
                <li>
                    <Text
                        h4
                        css={{
                            textGradient: '45deg, $blue500 -20%, $pink500 50%'
                          }}
                    >
                        <Link href="/">Home</Link>
                    </Text>
                </li>
                <li>
                    <Text
                        h4
                        css={{
                            textGradient: '45deg, $blue500 -20%, $pink500 50%'
                          }}
                    >
                        <Link href="/about">About</Link>
                    </Text>
                </li>
                <li>
                    <Text
                        h4
                        css={{
                            textGradient: '45deg, $blue500 -20%, $pink500 50%'
                          }}
                    >
                        <Link href="/projects">Projects</Link>
                    </Text>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <Avatar src="/avatar-picture.JPG" size="xl" color="gradient" bordered />
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header