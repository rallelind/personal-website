
import { Modal } from '@nextui-org/react'

const Modals = (props) => {
    return (
        <div>
            <Modal
                noPadding
                width="500px"
                open={props.open}
                onClose={props.onClose}
            >
                <Modal.Body>
                    <img height="500px" src={props.image} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modals




