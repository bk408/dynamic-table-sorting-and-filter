import { useState } from "react";
import { usersData } from "../utils/Data";

const EmployeeList = () => {
  const [tableData, setTableData] = useState(usersData);
    const [isAscending, setIsAscending] = useState(true);
    const [userInput, setUserInput] = useState("")
    


  const handleClick = () => {
    const sortedData = [...tableData].sort((a, b) =>
      isAscending ? a.age - b.age : b.age - a.age
    );
    setTableData(sortedData);
    setIsAscending(!isAscending);
    };
    

    const handleChange = (e) => {
        const inputs = (e.target.value)
        setUserInput(inputs)
        const filteredValue = usersData.filter((item) => item.name.toLowerCase().includes(inputs.toLowerCase()))
        setTableData(filteredValue)
  }





  return (
    <div className="container">
          <div className="box">
              <input type="text" placeholder="search" value={userInput} onChange={handleChange} />
        <table>
          <caption>Employees Data</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th onClick={handleClick}>Age </th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>{item.jobTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
