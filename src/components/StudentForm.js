import { useEffect, useState} from 'react';

export default function StudentForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rollNo, setRollNo] = useState("");

    const arr = [name, email, rollNo];

    useEffect(() => {
        setName(props.nameValue); 
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);  
    }, [props])

    const handleClick = () => { 
        props.getState(arr);
    }

    return (
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <input type="text" defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} className="form-control my-3" placeholder="Enter your name" required/>
            <input type="email" defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} className="form-control my-3" placeholder="Enter your email" required/>
            <input type="number" defaultValue={props.rollNoValue} onChange={(event) => setRollNo(event.target.value)} className="form-control my-3" placeholder="Enter your roll number" required/>
            <button className="btn btn-success d-block mx-auto my-3" onClick={handleClick}>{props.children}</button>
        </div>
    )
}