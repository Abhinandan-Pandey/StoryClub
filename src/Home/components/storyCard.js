import React from 'react';
import sprite from '../../Styles/img/sprite.svg';

function storyCard(props) {
    return (
       <div className="story-card">
           <div className="story-card__title" onClick={props.postEditor}>{props.card.title}</div>
                <button className="icon-button" onClick={props.postEditor}>
                    <svg className='icon__delete'>
                        <use href={sprite + '#icon-trash-can'}></use>
                    </svg>
                </button>
                <button  className="icon-button"  onClick={props.postEditor}>
                    <svg className='icon__edit'>
                        <use href={sprite + '#icon-document-edit'}></use>
                    </svg>
                </button>
             <div className="story-card__body"  onClick={props.postEditor}>
             {props.card.body}
             </div>
               <button className="written-by story-card__by" onClick={props.profileViewer}>
                   <div className="">by-Abhinandan&nbsp;</div>
              </button>
       </div>
    )
}

export default storyCard
