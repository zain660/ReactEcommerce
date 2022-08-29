import Header from "./header";
import Footer from "./footer";
import React, { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";

const All_products = () =>{
    const products = [
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "/ProductDetails",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        // More products...
      ];
    const [showFilters, setShowfilters] = useState(true);
    const [check, setCheck] = useState({
        leather: false,
        cotton: false,
        fabric: false,
        crocodile: false,
        wool: false,
        large: false,
        medium: false,
        small: false,
        mini: false,
        luxesignatire: false,
        luxelondon: false,
    });

    const { leather, cotton, fabric, crocodile, wool, large, medium, small, mini, luxesignatire, luxelondon } = check;

    const changeHandler = (e) => {
        setCheck({
            ...check,
            [e.target.name]: e.target.checked,
        });
    };

    const applyFilters = (e) => {
        setCheck({
            ...check,
            leather: false,
            cotton: false,
            fabric: false,
            crocodile: false,
            wool: false,
            large: false,
            medium: false,
            small: false,
            mini: false,
            luxesignatire: false,
            luxelondon: false,
        });
    };


  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto">
        <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <p className=" text-sm leading-3 text-gray-600 font-normal mb-2">
            Home / All Products
          </p>
          <div className=" flex justify-between items-center mb-4">
            <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              All Products
            </h2>

            {/*  filters Button (md and plus Screen) */}
            <button
              onClick={() => setShowfilters(!showFilters)}
              className=" cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center "
            >
              <svg
                className=" mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4V8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4V14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 4V5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filters
            </button>
          </div>
          <p className=" text-xl leading-5 text-gray-600 font-medium">
            09 Products
          </p>

          {/* Filters Button (Small Screen)  */}

          <button
            onClick={() => setShowfilters(showFilters)}
            className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
          >
            <svg
              className=" mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 4V8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4V14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4V5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>
        </div>

        <div
          id="filterSection"
          className={
            "relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " +
            (showFilters ? "block" : "hidden")
          }
        >
          {/* Cross button Code  */}
          <div
            onClick={() => setShowfilters(false)}
            className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
          >
            <svg
              className=" lg:w-6 lg:h-6 w-4 h-4"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 1L1 25"
                stroke="#1F2937"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L25 25"
                stroke="#27272A"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Colors Section */}
          <div>
            <div className=" flex space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 17V17.01"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Colors
              </p>
            </div>
            <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
                <div className=" w-4 h-4 rounded-full bg-white shadow"></div>
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  White
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Blue
                </p>
              </div>
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                <div className=" w-4 h-4 rounded-full bg-red-600 shadow"></div>
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Red
                </p>
              </div>
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
                <div className=" w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Indigo
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-black shadow"></div>
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Black
                </p>
              </div>
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                <div className=" w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Purple
                </p>
              </div>
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <div className=" w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Grey
                </p>
              </div>
            </div>
          </div>

          <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

          {/* Material Section */}
          <div>
            <div className=" flex space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Material
              </p>
            </div>
            <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Leather"
                  name="leather"
                  value="Leather"
                  checked={leather}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Leather"
                    >
                      Leather
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Cotton"
                  name="cotton"
                  value="Cotton"
                  checked={cotton}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Cotton"
                    >
                      Cotton
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Fabric"
                  name="fabric"
                  value="Fabric"
                  checked={fabric}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Fabric"
                    >
                      Fabric
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Crocodile"
                  name="crocodile"
                  value="Crocodile"
                  checked={crocodile}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Crocodile"
                    >
                      Crocodile
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Wool"
                  name="wool"
                  value="Wool"
                  checked={wool}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Wool"
                    >
                      Wool
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

          {/* Size Section */}
          <div>
            <div className=" flex space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H14"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7L14 5L12 3"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 3L3 5L5 7"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 10V21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 19L19 21L21 19"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12L19 10L17 12"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Size
              </p>
            </div>
            <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className=" flex md:justify-center md:items-center items-center justify-start ">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Large"
                  name="large"
                  value="Large"
                  checked={large}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Large"
                    >
                      Large
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center items-center ">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Medium"
                  name="medium"
                  value="Medium"
                  checked={medium}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Medium"
                    >
                      Medium
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex md:justify-center md:items-center items-center justify-end ">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Small"
                  name="small"
                  value="Small"
                  checked={small}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Small"
                    >
                      Small
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex md:justify-center md:items-center items-center justify-start ">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Mini"
                  name="mini"
                  value="Mini"
                  checked={mini}
                  onChange={changeHandler}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Mini"
                    >
                      Mini
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
 
          <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
            <button
              onClick={applyFilters}
              className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="mx-auto container px-6 xl:px-0 py-12">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                    <div className="relative">
                        <img className="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png" alt="sofa" />
                        <img className="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                            <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">

                    {products.map((product) => (
                        
                    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                        <img className="group-hover:opacity-60 transition duration-500" src={product.imageSrc} alt={product.imageAlt} />
                        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">{product.name}</p>
                            </div>
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800">{product.price}</p>
                            </div>
                        </div>
                        <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                            <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                            <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                        </div>
                        <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                            <button>
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z"
                                        fill="#1F2937"
                                    />
                                </svg>
                            </button>
                            <button>
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#1F2937" />
                                    <path
                                        d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z"
                                        fill="#1F2937"
                                    />
                                </svg>
                            </button>
                            <button>
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z"
                                        fill="#1F2937"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                   ))}
                </div>
                <div className="flex justify-end items-end mt-12">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>1</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>2</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>3</p>
                        </button>
                        <button className="flex justify-center items-center">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  );
}

export default All_products;
