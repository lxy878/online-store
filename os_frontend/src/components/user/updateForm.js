import React, {useState} from 'react'
import UserForm from './form'
import { Button, Modal } from 'react-bootstrap'

function UserUpdateForm(props){
    const {user, updateMethod} = props

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const submitMethod = (payload) => {
        updateMethod(payload)
        handleClose()
    }

    return (
        <>
        <Button variant='dark' onClick={handleShow}>
            Edit User Info
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <UserForm user={user} submitMethod={submitMethod} formText={{header:'Edit User Info', submit: 'Update'}}/>
            </Modal.Body>
        </Modal>
        </>
    )
    
}
export default UserUpdateForm