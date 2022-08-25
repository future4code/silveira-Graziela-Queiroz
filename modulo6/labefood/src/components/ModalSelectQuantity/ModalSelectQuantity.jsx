// import React, { useContext } from 'react'
// import { Modal, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import GlobalStateContext from '../context/GlobalStateContext';
// import { quantityNumbers } from '../constants/urls';


// function Modal() {
//     const { states, setters, requests } = useContext(GlobalStateContext)
//     const { qtd } = states;
//     const { setQtd } = setters;
//     const { onChangeQuantity, addToCart } = requests

//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Selecione a quantidade:
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <select value={qtd} onChange={onChangeQuantity} >
//                     <option value={0}></option>
//                     {quantityNumbers.map((qnt) => {
//                         return (
//                             <option key={qnt} value={qnt}>{qnt}</option>
//                         )
//                     })
//                     }
//                 </select>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant='outline-primary' onClick={() => addToCart(props.product, props.onHide, props.setAddButton)}>Adicionar ao carrinho</Button>
//             </Modal.Footer>
//         </Modal>
//     )




// }


// export default Modal;
import React from 'react';
import { Modal } from '@mui/material';
import { BoxModal, ButtonAddCart, SelectQuantity, TitleModal } from './styled';


const ModalSelectQuantity = (open, setOpen) => { //  foi feita uma desistruturação open setOpen
    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <BoxModal>
                  <TitleModal>
                    Selecione a quantidade desejada
                  </TitleModal>
                  <SelectQuantity>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </SelectQuantity>
                  <ButtonAddCart>
                    Adicionar ao carrinho
                  </ButtonAddCart>
                </BoxModal>

            </Modal>
        </>
    );
}
export default ModalSelectQuantity;