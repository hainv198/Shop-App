import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
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
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-9">
                <strong>Information</strong>
                <br />
                <div class="table-responsive">
                  <table class="table ">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Id</strong>
                        </td>
                        <td class="text-primary">{product.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Title</strong>
                        </td>
                        <td class="text-primary">{product.title}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Description</strong>
                        </td>
                        <td className="text-primary">{product.description}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Price</strong>
                        </td>
                        <td className="text-primary">{product.price}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Category</strong>
                        </td>
                        <td className="text-primary">{product.category}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Image</strong>
                        </td>
                        <img src={product.image} className="img-circle" />
                      </tr>

                      <tr>
                        <td>
                          <strong>Create at</strong>
                        </td>
                        <td class="text-primary">{product.createAt}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default Products;
