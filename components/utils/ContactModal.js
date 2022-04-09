import { Modal, Text, Button, Spacer } from "@nextui-org/react"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import { FcIphone, FcDocument } from "react-icons/fc"
import Link from "next/link"

const ContactModal = (props) => {
    return (
        <Modal 
            onClose={props.onClose}
            open={props.open}
        >
            <Modal.Header>
                <Text 
                    h4
                    css={{
                        textGradient: '45deg, $blue500 -20%, $pink500 50%'
                    }}
                >
                    Might i be an interesting candidate for you?
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Text>
                    Feel free to contact me in the following ways:
                </Text>
                <Spacer y={1} />
                <Text>
                    <FcIphone size={25} /> +(45) 61 31 27 87
                </Text>
                <Spacer y={1} />
                <Text>
                    <AiOutlineMail style={{color: "#0072C6"}} size={25} /> rasmus1234555@hotmail.dk
                </Text>
                <Spacer y={1} />
                    <Text>
                            <Link href="https://linkedin.com/in/rasmus-lind-297249215">
                                <a target="_blank">
                                    <AiFillLinkedin style={{color: "#0e76a8"}} size={30}/>
                                </a>
                            </Link>  
                    Click linkedIn logo to reach out on linkedIn
                    </Text>
                <Spacer y={1} />
                <Text>
                    <FcDocument size={25} />Need my CV as a PDF? 
                </Text>
                <Spacer y={1} />
                <Button color="gradient"><a download href="/CV.pdf">Click to download PDF</a></Button>
            </Modal.Body>
            <Modal.Footer>
                <Link href="https://github.com/rallelind">
                    <a target="_blank">
                        <AiFillGithub size={40}/>
                    </a>
                </Link>                 
                <Spacer x={0.5} />
            </Modal.Footer>
        </Modal>
    )
}

export default ContactModal
