import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount;i++){
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div>
        <div>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photoUser}/>
                    </div>
                     <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{"u.location.city"},{"u.location.country"}</div>
                </span>
            </div>)
        }
    </div>
}
export default Users;