import React from 'react'

const Addstudent = () => {
  return (
    <div>
<div className="conatiner">
    <div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label for="" className="form-label">Name</label><br></br>
<input type="text" className="form-control"/>

</div>
<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label for="" className="form-label">Roll No.</label><br></br>
<input type="text" className="form-control"/>
</div>

<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label for="" className="form-label">Admission No.</label><br></br>
<input type="text" className="form-control"/>

</div>

<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label for="" className="form-label">University No.</label><br></br>
<input type="text" className="form-control"/>
</div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

            <label for="" className="form-label">College</label>
            <input type="text" className="form-control"/>
        </div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

           <button className="btn btn-success">REGISTER</button>
        </div>
    </div>
</div>


    </div>
  )
}

export default Addstudent