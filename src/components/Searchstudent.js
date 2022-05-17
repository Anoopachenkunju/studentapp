import React from 'react'
import Header from './Header'

const Searchstudent = () => {
  return (

    <div>
        <Header />
    <div>

<div className="conatiner">
    <div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label for="" className="form-label">University No.</label><br></br>
<input type="text" className="form-control"/>

</div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

           <button className="btn btn-success">SEARCH</button>
        </div>
    </div>
</div>



    </div>
    </div>
  )
}

export default Searchstudent