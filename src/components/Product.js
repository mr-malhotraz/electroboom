import React, { useEffect, useState } from "react";
import Travdata from "./travdata";
import { Button } from "@mui/material";
import "./product.css";
import { ColorRing } from "react-loader-spinner";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartslice";

const Product = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(Travdata);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 300));
      setLoading(false);
    };

    loadData();
  }, []);

  const filterResult = (catItem) => {
    const result = Travdata.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    setData([...data, item]);
  };

  return (
    <div className="products-page-bg-img">
      <div className="main">
        <h1 className="text-center text-black display-6">Our Products</h1>

        <div className="container-fluid">
          <div className="row mt-4 mx-2">
            {loading ? (
              <div className="loader">
                <ColorRing />
              </div>
            ) : (
              <>
                <div className="col-md-3">
                  <div className="categories-menu sticky-top mb-5">
                    <h3 className="text-center mb-3">Categories:</h3>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => setData(Travdata)}
                    >
                      All
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Laptops & TVs")}
                    >
                      Laptops & TVs
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Audio")}
                    >
                      Audio
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Wearables")}
                    >
                      Wearables
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Gaming")}
                    >
                      Gaming
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Tablets")}
                    >
                      Tablets
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Cameras")}
                    >
                      Cameras
                    </button>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {data.map((values) => {
                      const { id, title, image, description, price } = values;
                      return (
                        <div className="col-md-4 mb-4" key={id}>
                          <div className="card">
                            <img
                              src={image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text">{description}</p>
                              <h6 className="card-price">&#8377;{price}</h6>
                              <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddShoppingCart />}
                                onClick={() => handleAddToCart(values)}
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
