import React from 'react'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const AdminClients = () => {
  return (
    <div className='dashboard'>
         <div className='container'>
            <div className='row'>
            <div className="col-md-12 text-end">
                <img src={img} alt="" className="img-fluid dashimg mx-2" />
                <IoIosArrowDown size={20} className="mx-2" />
                <span className="notibg mx-2 text-center">
                      <IoMdNotifications className="" color="black" size={20} />
                </span>
              
            </div>

            <div className="col-md-12 text-start">
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Clients</span>     </p>  
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    </div>
    <div className="fs-3 mx-2 fw-bold mb-0">Clients</div> 
</div>







            </div>
     </div>  
         
         
         
         
         
         
         
         <div className="table-responsive mt-3">
            <h5 className='mb-3'>All Clients</h5>
        <table className="table table-bordered">
          <thead className=" border-0">
            <tr className='border-0 '>
              <th className='border-0 table-light1'>No</th>
              <th className='border-0 table-light1'>Name</th>
              <th className='border-0 table-light1'>E-mail</th>
              <th className='border-0 table-light1'>Active Jobs</th>
              <th className='border-0 table-light1'>Location</th>
              <th className='border-0 table-light1'>Status</th>
            </tr>
          </thead>
          <tbody >
            
              <tr className='border-0'>
                <td className='border-0'>1</td>
               <td className='border-0'> <Link to={'/admin/client-profile'} style={{ textDecoration: "none",color:"black" }}>  Client Name</Link></td>
                <td className='border-0'>Client Email</td>
                <td className='border-0 '> 12</td>
                <td className='border-0'>New York City</td>
                <td className='border-0 '><Link to={''} ><button className='btn btn-success'>Active</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
               <td className='border-0'> <Link to={'/admin/client-profile'} style={{ textDecoration: "none",color:"black" }}>  Client Name</Link></td>
                <td className='border-0'>Client Email</td>
                <td className='border-0 '> 12</td>
                <td className='border-0'>New York City</td>
                <td className='border-0 '><Link to={''} ><button className='btn btn-success'>Active</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
               <td className='border-0'> <Link to={'/admin/client-profile'} style={{ textDecoration: "none",color:"black" }}>  Client Name</Link></td>
                <td className='border-0'>Client Email</td>
                <td className='border-0 '> 12</td>
                <td className='border-0'>New York City</td>
                <td className='border-0 '><Link to={''} ><button className='btn btn-success'>Active</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
               <td className='border-0'> <Link to={'/admin/client-profile'} style={{ textDecoration: "none",color:"black" }}>  Client Name</Link></td>
                <td className='border-0'>Client Email</td>
                <td className='border-0 '> 12</td>
                <td className='border-0'>New York City</td>
                <td className='border-0 '><Link to={''} ><button className='btn btn-success'>Active</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
               <td className='border-0'> <Link to={'/admin/client-profile'} style={{ textDecoration: "none",color:"black" }}>  Client Name</Link></td>
                <td className='border-0'>Client Email</td>
                <td className='border-0 '> 12</td>
                <td className='border-0'>New York City</td>
                <td className='border-0 '><Link to={''} ><button className='btn btn-success'>Active</button></Link> </td>
              </tr>
     
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminClients
