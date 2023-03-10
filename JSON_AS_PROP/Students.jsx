import React from 'react'

export const Students = (props) => {
  return (
    <>
      <h1>Student details</h1>
      <div className='students'>

        <div className='std'>
          <h3>Name : {props.student[0].studentName}</h3>
          <h4>Branch : {props.student[0].branch}</h4>
          <h4>Course : {props.student[0].course}</h4>
          <h4>Duration : {props.student[0].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[0].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

        <div className='std'>
          <h3>Name : {props.student[1].studentName}</h3>
          <h4>Branch : {props.student[1].branch}</h4>
          <h4>Course : {props.student[1].course}</h4>
          <h4>Duration : {props.student[1].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[1].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

        <div className='std'>
          <h3>Name : {props.student[2].studentName}</h3>
          <h4>Branch : {props.student[2].branch}</h4>
          <h4>Course : {props.student[2].course}</h4>
          <h4>Duration : {props.student[2].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[2].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

          </div>

        <div className='grp2'>
        <div className='std'>
          <h3>Name : {props.student[3].studentName}</h3>
          <h4>Branch : {props.student[3].branch}</h4>
          <h4>Course : {props.student[3].course}</h4>
          <h4>Duration : {props.student[3].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[3].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

        <div className='std'>
          <h3>Name : {props.student[4].studentName}</h3>
          <h4>Branch : {props.student[4].branch}</h4>
          <h4>Course : {props.student[4].course}</h4>
          <h4>Duration : {props.student[4].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[4].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

        <div className='std'>
          <h3>Name : {props.student[5].studentName}</h3>
          <h4>Branch : {props.student[5].branch}</h4>
          <h4>Course : {props.student[5].course}</h4>
          <h4>Duration : {props.student[5].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[5].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

        </div>

        <div className='grp3'>
        <div className='std'>
          <h3>Name : {props.student[6].studentName}</h3>
          <h4>Branch : {props.student[6].branch}</h4>
          <h4>Course : {props.student[6].course}</h4>
          <h4>Duration : {props.student[6].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[6].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

        <div className='std'>
          <h3>Name : {props.student[7].studentName}</h3>
          <h4>Branch : {props.student[7].branch}</h4>
          <h4>Course : {props.student[7].course}</h4>
          <h4>Duration : {props.student[7].duration}</h4>
          <h4 className='details'>Details : <br />
            {props.student[7].details.map((x) => { return <li>{x}</li> })}</h4>
        </div>

        <div className='std'>
            <h3>Name : {props.student[8].studentName}</h3>
            <h4>Branch : {props.student[8].branch}</h4>
            <h4>Course : {props.student[8].course}</h4>
            <h4>Duration : {props.student[8].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[8].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          </div>

          <div className='grp4'>
          <div className='std'>
            <h3>Name : {props.student[9].studentName}</h3>
            <h4>Branch : {props.student[9].branch}</h4>
            <h4>Course : {props.student[9].course}</h4>
            <h4>Duration : {props.student[9].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[9].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          <div className='std'>
            <h3>Name : {props.student[10].studentName}</h3>
            <h4>Branch : {props.student[10].branch}</h4>
            <h4>Course : {props.student[10].course}</h4>
            <h4>Duration : {props.student[10].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[10].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          <div className='std'>
            <h3>Name : {props.student[11].studentName}</h3>
            <h4>Branch : {props.student[11].branch}</h4>
            <h4>Course : {props.student[11].course}</h4>
            <h4>Duration : {props.student[11].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[11].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>
          </div>

          <div className='grp5'>

          <div className='std'>
            <h3>Name : {props.student[12].studentName}</h3>
            <h4>Branch : {props.student[12].branch}</h4>
            <h4>Course : {props.student[12].course}</h4>
            <h4>Duration : {props.student[12].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[12].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          <div className='std'>
            <h3>Name : {props.student[13].studentName}</h3>
            <h4>Branch : {props.student[13].branch}</h4>
            <h4>Course : {props.student[13].course}</h4>
            <h4>Duration : {props.student[13].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[13].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          <div className='std'>
            <h3>Name : {props.student[14].studentName}</h3>
            <h4>Branch : {props.student[14].branch}</h4>
            <h4>Course : {props.student[14].course}</h4>
            <h4>Duration : {props.student[14].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[14].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          </div>

          <div className='grp6'>

          <div className='std'>
            <h3>Name : {props.student[15].studentName}</h3>
            <h4>Branch : {props.student[15].branch}</h4>
            <h4>Course : {props.student[15].course}</h4>
            <h4>Duration : {props.student[15].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[15].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          <div className='std'>
            <h3>Name : {props.student[16].studentName}</h3>
            <h4>Branch : {props.student[16].branch}</h4>
            <h4>Course : {props.student[16].course}</h4>
            <h4>Duration : {props.student[16].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[16].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          <div className='std'>
            <h3>Name : {props.student[17].studentName}</h3>
            <h4>Branch : {props.student[17].branch}</h4>
            <h4>Course : {props.student[17].course}</h4>
            <h4>Duration : {props.student[17].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[17].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>
          
          </div>

          <div className='grp7'>

          <div className='std'>
            <h3>Name : {props.student[18].studentName}</h3>
            <h4>Branch : {props.student[18].branch}</h4>
            <h4>Course : {props.student[18].course}</h4>
            <h4>Duration : {props.student[18].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[18].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>

          <div className='std'>
            <h3>Name : {props.student[19].studentName}</h3>
            <h4>Branch : {props.student[19].branch}</h4>
            <h4>Course : {props.student[19].course}</h4>
            <h4>Duration : {props.student[19].duration}</h4>
            <h4 className='details'>Details : <br />
                  {props.student[19].details.map((x)=>{return <li>{x}</li>})}</h4>
          </div>
          </div>
    </>
  )
}
