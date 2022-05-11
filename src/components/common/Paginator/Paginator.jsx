import React from "react";
import styles from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 3770; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span key={p.id} className={currentPage === p && styles.selectedPage}
                    onClick={() => { 
                        onPageChanged(p); 
                    }}> {p} </span>
            })}
        </div>
    )
}

export default Paginator;