import React from 'react'

const Students = (props) => {
  console.log(Array.isArray(props.data));
  console.log(props.data);
  return (
    <>
    <center>
    <table border="2px" style={{textAlign:"center"}}>

        <tr>
            <th>Student Name</th>
            <th>Branch</th>
            <th>Course</th>
            <th>Duration</th>
            <th>Details</th>
        </tr>

        
            {props.data.map((x)=>{
                            return (
                                <tr>
                                <>
                                <td>{x.studentName}</td>
                                <td>{x.branch}</td>
                                <td>{x.course}</td>
                                <td>{x.duration}</td>
                                <td style={{textAlign:"left"}}> <ol>
                                    {x.details.map((x)=>{
                                                            return <li>{x}</li>
                                                        }
                                                    )
                                        }
                                    </ol> </td>
                                </>
                                </tr>
                            )
                        })}
        

    </table>
    </center>
    </>
  )
}

export default Students;
