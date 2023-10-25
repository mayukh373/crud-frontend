import Axios from 'axios'
import { Link } from 'react-router-dom'

export default function StudentListRow(props) {

    const {_id, name, email, rollNo} = props.obj;

    const handleClickDel = () => {
        Axios.delete("https://crud-backend-ack6.onrender.com/studentRoute/delete-student/" + _id)
        .then((res) => {
            if (res.status === 200) {
                alert("Record deleted successfully");
                window.location.reload();
            }
            else 
                Promise.reject();
        })
        .catch((err) => alert(err))
    }

    return (
        <tr>
            <td className="text-center">{name}</td>
            <td className="text-center">{email}</td>
            <td className="text-center">{rollNo}</td>
            <td className="text-center">
                <button className="btn btn-success me-1">
                    <Link className="text-decoration-none text-light" to={"/edit-student/"+ _id}>Edit</Link>
                </button>
                <button onClick={handleClickDel} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}