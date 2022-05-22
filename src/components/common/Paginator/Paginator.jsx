import classNames from "classnames";
import React, { useState } from "react";
import styles from './Paginator.module.css';


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    console.log(classNames({ [styles.selectedPages]: currentPage === 1 }, styles.pageNumber));

    return (
        <div className={styles.paginator}>
            {/* <div className={styles.prevPageBtn}> */}
                {portionNumber > 1 &&
                    <button onClick={() => { setPortionNumber(portionNumber - 1) }}>&laquo;</button>}
           {/*  </div> */}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={classNames({
                        [styles.selectedPages]: currentPage === p
                    }, styles.pageNumber)}
                        key={p.id}
                         onClick={() => {
                            onPageChanged(p);
                        }}> {p} </span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>&raquo;</button>}

        </div>
    )
}

export default Paginator;