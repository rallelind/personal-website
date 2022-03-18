import stylesFooter from "../styles/Footer.module.css"
import Link from "next/link"
import { Spacer, Text } from '@nextui-org/react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai"


const Footer = () => {
    const companyInfo = [
        {id: 1, companyInfo: <Text size={18} color="white"><AiOutlinePhone /> (+45) 61 31 27 87</Text>}, 
        {id: 2, companyInfo: <Text size={18} color="white"><AiOutlineMail /> rasmus1234555@hotmail.dk</Text>},
    ]

    return (
        <footer className={stylesFooter.footer}>
            <div className={stylesFooter.footerEle}>
            <h2>Contact</h2>
            <br/>
                <table className={stylesFooter.table}>
                    <tbody>
                    {companyInfo.map((ele, i) =>
                    <tr key={i}>
                        <td>{ele.companyInfo}<Spacer y={1} /></td>
                    </tr>
                    )}   
                    <tr>
                        <td>
                            <Link href="https://linkedin.com/in/rasmus-lind-297249215">
                                <a target="_blank">
                                    <AiFillLinkedin size={40}/>
                                </a>
                            </Link>  
                            <Link href="https://github.com/rallelind">
                                <a target="_blank">
                                    <AiFillGithub size={40}/>
                                </a>
                            </Link>  
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
        </footer>
    )
}

export default Footer
