import React from 'react'

const Students = (props) => {
  return (
    <>
    <table>

        <tr>
            <th>Student Name</th>
            <th>Branch</th>
            <th>Course</th>
            <th>Duration</th>
            <th>Details</th>
        </tr>

        <tr>
            {props.data.map((x)=>{
                            return (
                                <>
                                <td>{x.studentName}</td>
                                <td>{x.branch}</td>
                                <td>{x.course}</td>
                                <td>{x.duration}</td>
                                <td> <ol>
                                    {x.details.map((x)=>{
                                                            return <li>{x}</li>
                                                        }
                                                    )
                                        }
                                    </ol> </td>
                                </>
                            )
                        })}
        </tr>

    </table>
    </>
  )
}

export default Students;