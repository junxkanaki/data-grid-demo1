import "./TableList.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
  const rows = [
    {
      id: 1143155,
      product: "iPad",
      img:
        "https://cdn.pixabay.com/photo/2018/10/11/09/08/dog-3739225_960_720.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved"
    },
    {
      id: 2235235,
      product: "X Box",
      img:
        "https://cdn.pixabay.com/photo/2018/10/11/09/08/dog-3739225_960_720.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending"
    },
    {
      id: 2342353,
      product: "MacBook",
      img:
        "https://cdn.pixabay.com/photo/2018/10/11/09/08/dog-3739225_960_720.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending"
    },
    {
      id: 2357741,
      product: "Surface Pro",
      img:
        "https://cdn.pixabay.com/photo/2018/10/11/09/08/dog-3739225_960_720.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved"
    },
    {
      id: 2342355,
      product: "Go Pro",
      img:
        "https://cdn.pixabay.com/photo/2018/10/11/09/08/dog-3739225_960_720.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending"
    }
  ];

  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  {/* {`status ${row.status} this will change color according to its status */}
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <table className="table">
        <tr>
          <th className="tableCell">Tracking ID</th>
          <th className="tableCell">Product</th>
          <th className="tableCell">Customer</th>
          <th className="tableCell">Date</th>
          <th className="tableCell">Amount</th>
          <th className="tableCell">Payment Method</th>
          <th className="tableCell">Status</th>
        </tr>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="tableCell">{row.id}</td>
            <td className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </td>

            <td className="tableCell">{row.customer}</td>
            <td className="tableCell">{row.date}</td>
            <td className="tableCell">{row.amount}</td>
            <td className="tableCell">{row.method}</td>
            <td className="tableCell">
             
              <span className={`status ${row.status}`}>{row.status}</span>
            </td>
          </tr>
        ))}
      </table> */}
    </>
  );
};

export default TableList;
