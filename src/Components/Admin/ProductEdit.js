import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BasicRating from '../Atom/Ratting';
import { Link } from 'react-router-dom';
const ProductEdit = (props) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(props.data);
  }, [props.data]);

  console.log('Products Table');
  var products_list = [];
  if (products != null) {
    products_list = products.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <img src={item.image} style={{ width: '150' }}></img>
        </td>
        <td>{item.title}</td>
        <td>${item.price}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        {item.price > 0 && <td>{item.price}</td>}
        {item.price === 0 && <td>Het hang</td>}
        {item.rating.rate < 3 && <td>{item.rating.rate}</td>}
        {item.rating.rate > 3 && (
          <td>
            {item.rating.rate}
            <BasicRating />
          </td>
        )}
        {item.rating.rate === 0 && (
          <td>
            'Het hang '<BasicRating />
          </td>
        )}
        <td>
          <button type="button" className="btn btn-primary">
            <Link to={`/edit/${item.id}`} style={{ color: 'white' }}>
              <AutoFixHighIcon />
            </Link>
          </button>
          <button type="button" className="btn btn-danger">
            <DeleteForeverIcon />
          </button>
        </td>
      </tr>
    ));
  }
  return (
    <div style={{ marginTop: 100 }} className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price </th>
            <th>Description </th>
            <th>Category</th>
            <th>Condition</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{products_list}</tbody>
      </Table>
    </div>
  );
};

export default ProductEdit;
