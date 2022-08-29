import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    console.log("product");
    setProduct(response.data);
  };

  function PostToCart(user_id, product_id) {
    axios
      .post(`http://localhost:5000/carts/${user_id}/${product_id}`, {
        user_id: user_id,
        productId: product_id,
      })
      .then((res) => {
        document.getElementById("toast-interactive").classList.remove("hidden");

        setTimeout(function () {
          document.getElementById("toast-interactive").classList.add("hidden");
        }, 5000);
      });
    // console.log()
  }

  function CloseToast() {
    document.getElementById("toast-interactive").classList.add("hidden");
  }

  return (
    <>
      <Header />

      <div
        id="toast-interactive"
        className="hidden toast p-4 fixed w-full max-w-xs text-white bg-lime-500 rounded-lg shadow dark:bg-lime-500 dark:text-white flex absolute bottom-5 right-5"
        role="alert"
        style={{ position: "fixed" }}
      >
        <div class="flex">
          <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>{" "}
            <span class="sr-only">Cart icon</span>
          </div>
          <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-white dark:text-white">
              <strong>Success</strong>
            </span>
            <div class="mb-2 text-sm font-normal">
              Product added in to the cart.
            </div>
            <br />
            <div class="grid grid-cols-2 gap-2">
              <div>
                <button
                  onClick={() => CloseToast()}
                  class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                Best Deal
              </h1>
              <p className="text-base lg:text-xl text-gray-800 mt-2">
                Save upto <span className="font-bold">50%</span>
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
            </div>
          </div>
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                Game Console
              </h1>
              <p className="text-base lg:text-xl text-gray-800">
                Save Upto <span className="font-bold">30%</span>
              </p>
            </div>
            <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img
                src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
                alt=""
                className="md:w-20 md:h-20 lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto md:py-12 py-9">
        <div className=" bg-gray-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
          {/* Delivery grid Card */}
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3334 4H1.33337V21.3333H21.3334V4Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.3334 10.6665H26.6667L30.6667 14.6665V21.3332H21.3334V10.6665Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.33333 28.0002C9.17428 28.0002 10.6667 26.5078 10.6667 24.6668C10.6667 22.8259 9.17428 21.3335 7.33333 21.3335C5.49238 21.3335 4 22.8259 4 24.6668C4 26.5078 5.49238 28.0002 7.33333 28.0002Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.6667 28.0002C26.5077 28.0002 28 26.5078 28 24.6668C28 22.8259 26.5077 21.3335 24.6667 21.3335C22.8258 21.3335 21.3334 22.8259 21.3334 24.6668C21.3334 26.5078 22.8258 28.0002 24.6667 28.0002Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
              Delivery
            </h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Free worldwide delivery over orders above $100
            </p>
          </div>

          {/* customer Grid Card */}

          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
              Customer Care
            </h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Our customer care is available 24/7 at{" "}
              <span className=" font-semibold cursor-pointer">
                +495-589-509
              </span>{" "}
              and{" "}
              <span className=" font-semibold cursor-pointer">
                customercare@gmail.com
              </span>
            </p>
          </div>

          {/* Recycle Grid Card */}

          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6667 1.3335L28.0001 6.66683L22.6667 12.0002"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 14.6665V11.9998C4 10.5853 4.5619 9.22879 5.5621 8.2286C6.56229 7.22841 7.91885 6.6665 9.33333 6.6665H28"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33333 30.6667L4 25.3333L9.33333 20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 17.3335V20.0002C28 21.4147 27.4381 22.7712 26.4379 23.7714C25.4377 24.7716 24.0812 25.3335 22.6667 25.3335H4"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
              Recycle
            </h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              All out products are 100 percent recycable
            </p>
          </div>

          {/* Secure Payment Card */}

          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
              Secure Payment
            </h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Transaction process has end to end encryption
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Featured Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={`/ProductImages/${product.image}`}
                    alt={product.image}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/ProductDetails/${product.id}`}>
                        <span aria-hidden="true">{product.name}</span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    <input
                      type="hidden"
                      name="user_id"
                      id="user_id"
                      value={1}
                    />
                    <input
                      type="hidden"
                      name="product_id"
                      id="product_id"
                      value={product.id}
                    />
                    <button
                      onClick={() => PostToCart(1, product.id)}
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            &#128293; Our Trending Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={`/ProductImages/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/ProductDetails/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
              Our Best Selling Products
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
            <div className="bg-gray-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  $1200
                </p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png"
                  alt="A chair with designed back"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                <button
                  aria-label="show in red color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#DC2626"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in white color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="white"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in black color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#111827"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  $1200
                </p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png"
                  alt="A chair with wooden legs"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                <button
                  aria-label="show in white color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="white"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in black color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#111827"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  $1200
                </p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png"
                  alt="A sofa chair with wooden legs"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                <button
                  aria-label="show in green color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#047857"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in brown color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#92400E"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
            <div className="bg-gray-50 p-8">
              <div>
                <h2 className="text-xl leading-tight text-gray-600">
                  Sectional Sofa
                </h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  $78900
                </p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-3">
                <img
                  src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png"
                  alt="A large sectional sofa"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                <button
                  aria-label="show in yellow color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#F59E0B"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in light gray color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#9CA3AF"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <div>
                <h2 className="text-xl leading-tight text-gray-600">
                  Two Seater Sofa
                </h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  $2900
                </p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-1">
                <img
                  src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                  alt="A beautiful two seater sofa"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                <button
                  aria-label="show in black color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#111827"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in green color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#047857"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={4}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 1
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={10}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={11}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider
            className="lg:hidden md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={2}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 1
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={10}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={11}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
            className="block md:hidden "
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 1
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={10}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={11}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
