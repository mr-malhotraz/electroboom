import React from "react";
import { useSelector } from "react-redux";

import "./shoppingcart.css";
import { Add, Clear, KeyboardBackspace, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ShoppinCartDemo = () => {
  const items = useSelector((state) => state);
  const total = items.cart.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <div class="h-100 h-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div class="card card-registration card-registration-2">
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-8"></div>
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-4">
                          <h5 class="text-uppercase ">
                            items {items.cart.length}
                          </h5>
                          <h5>€ {total}</h5>
                        </div>

                        <h5 class="text-uppercase mb-3">Shipping</h5>

                        <div class="mb-4 pb-2">
                          <select class="select">
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <h5 class="text-uppercase mb-3">Give code</h5>

                        <div class="mb-5">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="form3Examplea2">
                              Enter your code
                            </label>
                          </div>
                        </div>

                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-5">
                          <h5 class="text-uppercase">Total price</h5>
                          <h5>€ {total + 5}</h5>
                        </div>

                        <button
                          type="button"
                          class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppinCartDemo;
