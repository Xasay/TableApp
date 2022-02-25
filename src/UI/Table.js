
import React,{useState} from "react";
import Card from "./Card";
import $ from 'jquery';
import ReactPaginate from 'react-paginate';
import './Table.css';




$('.main_tr').on('click', function () {
    $(this).find('.fas .fa-angle-right').toggleClass('rotate_arrow');
});

const Table = (props) => {

    const[filteredData,setFilteredData]=useState([]);
    const [pageNumber,setPageNumber]=useState(0);

    const userList = props.users;

    const usersPerPage=5;
    const pageVisited = pageNumber*usersPerPage;

    const paginteUserList=userList.slice(pageVisited,pageVisited+usersPerPage);

 

   const pageCount= Math.ceil(userList.length / usersPerPage);

   const changeHandler=({selected})=>{
        setPageNumber(selected);
   };
    
    const searchHandler=(events)=>{
      
        const serachWord=events.target.value;
        const newFilter=paginteUserList.filter((value)=>{
            return value.name.toLowerCase().includes(serachWord.toLowerCase());
        });
        setFilteredData(newFilter);
    }



    return (
        <>
            <Card className="search_form">
                <form action="#" method="post" encType="multipart/form-data">
                    <label className="d-flex justify-content-between">
                        <input type="text" placeholder="Search" onChange={searchHandler} />
                        <button className="btn" type="submit" >
                            <i className="fas fa-search"></i>
                        </button>
                    </label>
                </form>
            </Card>
            <Card className="user_table_container ">
                <table className="heading_table table">
                    <thead className="table_heading">
                        <tr>
                            <td><i className="fas fa-angle-right"></i></td>
                            <td> ID</td>
                            <td>Name</td>
                            <td>User name</td>
                            <td>Email</td>
                            <td>Zipcode</td>
                            <td>Phone</td>
                            <td>City</td>
                            <td>Website</td>
                        </tr>
                    </thead>
                </table>
                {
                    (filteredData.length>0)?( filteredData.map((item, index) => (
                        <table className="table" key={index} >
                            <thead className="main_tr" data-bs-toggle="collapse" href={`#ta${item.id}le`} role="button" aria-expanded="false" aria-controls="collapseExample"  >
                                <tr>
                                    <td>
                                        <span className="collapse_arrow" >
                                            <i className="fas fa-angle-right"></i>
                                        </span>
                                    </td>
                                    <td> {item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.zipcode}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.website}</td>
                                </tr>
                            </thead>
                            <tbody className="aditional_table collapse" id={`ta${item.id}le`} >
                                <tr>
                                    <th>Suite</th>
                                    <th>Lorem</th>
                                    <th>lorem</th>
                                    <th>Additional information</th>
                                    <th>Date</th>
                                    <th>Where</th>
                                </tr>
                                <tr>
                                    <td>{item.address.suite}</td>
                                    <td>Lorem</td>
                                    <td>lorem</td>
                                    <td>lorem</td>
                                    <td>lorem</td>
                                    <td>lorem</td>
                                </tr>
                            </tbody>

                        </table>

                    ))):( paginteUserList.map((item, index) => (
                        <table className="table" key={index} >
                            <thead className="main_tr" data-bs-toggle="collapse" href={`#ta${item.id}le`} role="button" aria-expanded="false" aria-controls="collapseExample"  >
                                <tr>
                                    <td>
                                        <span className="collapse_arrow" >
                                            <i className="fas fa-angle-right"></i>
                                        </span>
                                    </td>
                                    <td> {item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.zipcode}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.website}</td>
                                </tr>
                            </thead>
                            <tbody className="aditional_table collapse" id={`ta${item.id}le`} >
                                <tr>
                                    <th>Suite</th>
                                    <th>Lorem</th>
                                    <th>lorem</th>
                                    <th>Additional information</th>
                                    <th>Date</th>
                                    <th>Where</th>
                                </tr>
                                <tr>
                                    <td>{item.address.suite}</td>
                                    <td>Lorem</td>
                                    <td>lorem</td>
                                    <td>lorem</td>
                                    <td>lorem</td>
                                    <td>lorem</td>
                                </tr>
                            </tbody>
                        </table>
                    )))
                }
                <ReactPaginate
                    previousLabel={''}
                    nextLabel={''}
                    pageCount={pageCount}
                    onPageChange={changeHandler}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousbutton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                
                />
            </Card>
        </>
    );
}

export default Table;



