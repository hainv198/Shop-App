import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { IconButton } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const ShopCart = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('user use effect!!');
    let url = 'https://fakestoreapi.com/products/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      {product != null ? (
        <div
          class="container bootstrap snippets bootdey"
          style={{ marginTop: 100 }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: 700 }}>Mặt hàng</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành Tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ display: 'flex' }}>
                  <div>
                    <img src={product.image} alt="" width={100} />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <p>
                      <b>
                        <p>{product.title}</p>
                      </b>
                      <p>${product.price}</p>
                      <p>Xoa</p>
                    </p>
                  </div>
                </td>
                <td>
                  {count}
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => setCount((pre) => pre + 1)}
                  >
                    <ControlPointIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => setCount((pres) => pres - 1)}
                  >
                    <HorizontalRuleIcon />
                  </IconButton>
                </td>
                <td>{product.price}</td>
                <td>{(product.price * count).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default ShopCart;
