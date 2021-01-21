import React, {useState} from 'react'
import UserForm from './userForm'
import { Button, Modal } from 'react-bootstrap'

function UserUpdateForm(props){
    const {path, user, update} = props

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const wrapMethod = (payload) => {
        update(payload)
        handleClose()
    }

    return (
        <>
        <Button variant='dark' onClick={handleShow}>
            Edit User Info
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <UserForm path={path} user={user} submitMethod={wrapMethod} formText={{header:'Edit User Info', submit: 'Update'}}/>
            </Modal.Body>
        </Modal>
        </>
    )
    
}
export default UserUpdateForm