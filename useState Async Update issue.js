import { useEffect, useState } from 'react';
import classes from './Form.module.css'


const FormPage = (props) => {

    const [users, setUsers] = useState([])

    // api is called
    useEffect(() => {
        setUsers(props.userData)
    }, [])

    useEffect(()=>{
        console.log("useeff called!!!");
        props.getUsersData(users)
    },[users])

    const changeHandler = (event)=>{
        const {name,checked} = event.target
        console.log(name,checked);
        
        if(name==="allSelect"){
            let tempUser = users.map((user)=>{
                return{...user,isChecked:checked}
            })
            setUsers(tempUser)
        }else{
            let tempUser = users.map((user)=> user.name===name?{...user,isChecked:checked}:user)
        setUsers(tempUser)
           
        // console.log(users);
        }
        
    }
    return (
        <>
            <hr></hr>
            <div className={classes.container}>
                <input type='checkbox' name="allSelect" onClick={changeHandler}
                    checked={users.filter((user) => user?.isChecked !== true).length < 1} />
                <label >Select ALL</label>
            </div>
            {users.map((user) => (
                <div className={classes.container}>
                    <input type='checkbox' name={user.name} checked={user?.isChecked || false} onChange={changeHandler} />
                    <label >{user.name}</label>
                </div>
            ))}
        </>
    )
}
export default FormPage;
