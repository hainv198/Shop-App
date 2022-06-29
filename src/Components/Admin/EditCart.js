import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Admin.css';
import { Link } from 'react-router-dom';

const EditCart = () => {
  const params = useParams();
  const [cart, setCart] = useState(null);
  const [category, setCategory] = useState(null);
  const [countries, setCountries] = useState(null);

  let navigate = useNavigate();
  useEffect(() => {
    if (params.id !== 'new') {
      let product_url =
        'https://62b0495de460b79df0422035.mockapi.io/products/' + params.id;

      fetch(product_url)
        .then((response) => response.json())
        .then((data) => {
          setCart(data);
        });
    } else {
      let initData = {};
      setCart(initData);
    }

    let category_url =
      'https://62b0495de460b79df0422035.mockapi.io/categories/';

    fetch(category_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
    let countries_url =
      'https://62b0495de460b79df0422035.mockapi.io/countries/';

    fetch(countries_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);

  const saveProduct = () => {
    let method = 'POST';
    let id = '';
    if (cart.id) {
      method = 'PUT';
      id = cart.id;
    }

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    };
    fetch(
      'https://62b0495de460b79df0422035.mockapi.io/products/' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate(-1);
      });
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let data = { ...cart };
    data[name] = value;
    setCart(data);
  };
  return (
    <div className="container" style={{ marginTop: 100 }}>
      {cart != null ? (
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="col-lg-10 col-md-12 mx-auto col-sm-12">
                <strong>{cart.id ? 'EDIT PRODUCT' : 'NEW PRODUCT'}</strong>
                <br />
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        {cart.id ? (
                          <td>
                            <strong>Product ID</strong>
                          </td>
                        ) : null}
                        <td className="text-primary">{cart.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Product</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={cart.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Category</strong>
                        </td>
                        <td>
                          <select
                            name="category"
                            value={cart.category}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            {category !== null
                              ? category.map((item) => (
                                  <option value={item.category}>
                                    {item.category}
                                  </option>
                                ))
                              : 'loading'}
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Price</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={cart.price}
                            name="price"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Picture</strong>
                        </td>
                        <td class="text-primary">
                          <img src={cart.picture} className="img-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Description</strong>
                        </td>
                        <td>
                          <textarea
                            type="text"
                            name="description"
                            className="form-control"
                            value={cart.description}
                            onChange={(e) => handleChange(e)}
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Origin</strong>
                        </td>
                        <td>
                          <div className="select-container">
                            {countries != null ? (
                              <select
                                name="origin"
                                value={cart.origin}
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              >
                                {countries != null
                                  ? countries.map((item) => (
                                      <option value={item.country}>
                                        {item.country}
                                      </option>
                                    ))
                                  : 'loading'}
                              </select>
                            ) : (
                              ''
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => saveProduct()}
                    >
                      Save
                    </button>
                    <span> </span>
                    <Link to="/admin">
                      <button type="button" class="btn btn-secondary">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default EditCart;
