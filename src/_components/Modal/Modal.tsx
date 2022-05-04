import React from 'react';
import './Modal.scss';
import  { useDispatch } from "react-redux";
import {modalActions} from '../../_actions/'

const Modal = (props:any) => {
    const dispatch = useDispatch();
    return (
        <div className="comp-modal-01">
            <div className="header">
                <div className="title">
                    Filter
                </div>
                <button onClick={() => dispatch(modalActions.openOrClose())} className="close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="body">
                {props.children}
            </div>
        </div>
    );
};

export default Modal;