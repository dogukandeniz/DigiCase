import React, { useState,useEffect } from "react";
import  { useDispatch,useSelector } from "react-redux";
import './_assets/styles/base.scss';
import './App.scss';
import {modalActions} from './_actions/'

import Card from './_components/Card/Card'
import Modal from './_components/Modal/Modal'

import {
    useQuery
} from "@apollo/client";

import {GET_POSTS}  from './_queries/getPosts'



const App = () => {
    const dispatch = useDispatch();
    const [characterType, setCharacterType] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [results, setResults] = useState<Array<Object>>([]);
    const isOpen =useSelector((state: any) => {
       return state.modal.isOpen;
    })

    useQuery(
        GET_POSTS,
        { variables: { page: page,name:characterType },
            onCompleted: data => {
                setResults(prevState => [...prevState,...data.characters.results]);
            },
        });

    const changeCharacter = (e:any) => {
        setPage(1);
        setResults([]);
        setCharacterType(e.target.value)
        setTimeout(() => {
            dispatch(modalActions.openOrClose())
        },500)
    }



    const handleScroll = (e:any) => {
        let top = e.target.documentElement.scrollTop;
        let winHeight = window.innerHeight;
        let scrollHeight = e.target.documentElement.scrollHeight;

            if(top + winHeight >= scrollHeight){
               setPage(prevState => prevState +1)
            }
    }
      useEffect(() => {
          window.addEventListener("scroll",handleScroll);
      },[])
  // @ts-ignore
  return (
    <>
      <section className="comp-section-01">
        <div className="c-wrapper">
          <div className="c-container-01">
            <h2 className="c-item-01">Rick and Morty</h2>
            <button onClick={() => dispatch(modalActions.openOrClose())} className="c-item-02">
            <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 23.8334L1.54071 5.95837L21.4593 5.95837L11.5 23.8334Z" fill="#C4C4C4"/>
              <rect x="8.16129" y="15.8889" width="6.67742" height="10.1111" fill="#C4C4C4"/>
            </svg>
            </button>
          </div>
          <div className="c-container-02">
            <Card data={results}/>
          </div>
          {isOpen &&  <Modal>
            <div className="modal-body">
              <div className="rdb-A rdb-large">
                <input id="rick" name="kvkk" value="rick" type="radio" checked={characterType === "rick"} onChange={(e) => changeCharacter(e)}/>
                <label htmlFor="rick">
                  Rick
                </label>
              </div>
              <div className="rdb-A rdb-large">

                <input id="morty" name="kvkk" value="morty" type="radio" checked={characterType === "morty"} onChange={(e) => changeCharacter(e)}/>
                <label htmlFor="morty">
                  Morty
                </label>
              </div>
            </div>
          </Modal>
          }
        </div>
      </section>
      <div onClick={() => dispatch(modalActions.openOrClose())} className={`overlay-wrapper ${isOpen ? 'on': '' }`}>

      </div>
    </>

  );
}

export default App;

