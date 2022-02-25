import React from "react";
import Table from "../UI/Table";


const TableSection = (props) => {

    



    return (
        <section className="w-100 p-3 ">
            <div className="center d-flex flex-column justify-content-center  ">
                <Table users={props.userList} />
            </div>
        </section>

    );
}

export default TableSection;