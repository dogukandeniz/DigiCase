import React from 'react';
import './Card.scss';


const Card = (props:any) : JSX.Element =>  {
debugger;
    return  props.data && props.data.map((post:any,index:number) => {
            return(
                <div key={index} className="comp-card-01">
                    <div className="c-item-01">
                        <img src={post.image} />
                    </div>
                    <div className="c-item-02">
                        <div className="c-item-02-A">
                            <div className="c-unit-01">
                                #id:
                            </div>
                            <div className="c-unit-02">
                                {post.id}
                            </div>
                        </div>
                        <div className="c-item-02-A">
                            <div className="c-unit-01">
                                Name:
                            </div>
                            <div className="c-unit-02">
                                {post.name}
                            </div>
                        </div>
                        <div className="c-item-02-A">
                            <div className="c-unit-01">
                                Location:
                            </div>
                            <div className="c-unit-02">
                                {post.location.name}
                            </div>
                        </div>
                    </div>
                </div>
          )
            })


};

export default Card;