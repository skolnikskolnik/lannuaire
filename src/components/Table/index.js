import React from "react";

//Table should have a col for: last name, first name, location, and picture
function Table(props){
    return(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Last name</th>
      <th scope="col">First Name</th>
      <th scope="col">Location</th>
      <th scope="col">Picture</th>
    </tr>
  </thead>
  <tbody>
    {props.randList.map(item => (
          <tr>
          <th scope="row">1</th>
          <td>{item.name.last}</td>
          <td>{item.name.first}</td>
          <td>{item.location.city}</td>
          <td>{item.picture.thumbnail}</td>
        </tr>
    ))}
  </tbody>
</table>
    )
}

export default Table;