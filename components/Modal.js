import stylesModal from "../styles/Modal.module.css"

import { Modal, Text } from '@nextui-org/react'

const Modals = (props) => {
    return (
        <div>
            <Modal
                noPadding
                width="500px"
                open={props.open}
                onClose={props.onClose}
            >
                <Modal.Header css={{ position: 'absolute', zIndex:'$1', top: 5, right: 8 }}>
                    <Text color="white">
                        link to full project: {props.href} 
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <img className={stylesModal.img} src={props.image} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modals




