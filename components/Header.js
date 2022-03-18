import Link from "next/link"
import { useState } from "react"
import { Text, Avatar } from '@nextui-org/react'
import stylesHeader from "../styles/Header.module.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import ContactModal from "./ContactModal"

const Header = () => {

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };

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
                    <Avatar src="/avatar-picture.JPG" onClick={handler} size="xl" color="gradient" bordered />
                    <ContactModal 
                        open={visible}
                        onClose={closeHandler}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Header