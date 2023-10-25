import Axios from 'axios'
import { useEffect, useState } from 'react'
import StudentListRow from './StudentListRow'

export default function StudentList() {

    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-backend-ack6.onrender.com/studentRoute")
        .then((res) => {
            if (res.status === 200) {
                setArr(res.data);
            }
            else 
                Promise.reject();
        })
        .catch((err) => alert(err));
    },[])

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <StudentListRow obj={val} key={ind}/>
        })
    }

    return (
        <table className="table table-striped table-bordered table-success mt-5">
            <thead>
                <tr>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Roll number</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>{ListItems()}</tbody>
        </table>
    )
}