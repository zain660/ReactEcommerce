import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Disclosure } from "@headlessui/react";
import axios from "axios";
import {
  MenuIcon,
  XIcon,
  SpeakerphoneIcon,
  HeartIcon,
} from "@heroicons/react/outline";

// Top Navigation Start
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Products", href: "/All-Products", current: false },
  { name: "About us", href: "/About", current: false },
  { name: "Contact us", href: "/Contact", current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function CloseToast() {
  document.getElementById("toast-interactive").classList.add("hidden");
}

// Top Navigation End
// console.clear();
const Navigation = () => {
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);
  const [cartdata, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [responseMessage, setMessage] = useState([""]);
  useEffect(() => {
    getCartData();
    // updateCart();
  }, []);

  function updateCart(id) {
    var quantity_feild = document.getElementById("quantity_feild");
    axios
      .post(`http://localhost:5000/carts/${id}`, {
        quantity_feild: quantity_feild,
      })

      .then((res) => {
        document.getElementById("toast-interactive").classList.remove("hidden");
        setTimeout(function () {
          document.getElementById("toast-interactive").classList.add("hidden");
        }, 5000);
      });
  }
  const getCartData = async () => {
    const response = await axios.get("http://localhost:5000/carts");
    setCart(response.data);
    let sum = (a) => a.reduce((x, y) => parseFloat(x) + parseFloat(y));
    const total = sum(cartdata.map((x) => x.product.price)).toFixed(2);
    setTotalAmount(total);
  };

  return (
    <>
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Disclosure as="nav" className="bg-gray-800 ">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}

                      {/* <Link to="/Home">Home</Link>   */}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    title="Wishlist"
                    className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                    <span class="sr-only">HeartIcon</span>
                    <div class="inline-flex absolute -top-0 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                      20
                    </div>
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    title="Cart"
                    onClick={() => {
                      setShow(!show);
                      getCartData();
                    }}
                    className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                    <span class="sr-only">Cart</span>
                    <div class="inline-flex absolute -top-0 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                      20
                    </div>
                  </button>
                  &nbsp;
                  <Link
                    type="button"
                    to={"/Compare"}
                    title="Compare List"
                    className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                        d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
                      />
                    </svg>
                    <span class="sr-only">Compare</span>
                    <div class="inline-flex absolute -top-0 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                      20
                    </div>
                  </Link>
                  &nbsp;
                  <Link
                    type="button"
                    to={"/Login"}
                    title="Login"
                    className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </Link>
                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {show && (
        <div
          className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
          id="chec-div"
        >
          <div
            className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout"
          >
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
              >
                <div
                  className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none">Back</p>
                </div>
                <p className="text-5xl font-black leading-10 text-indigo-600 pt-3">
                  My Cart
                </p>

                {cartdata.map((carts) => (
                  <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                    <div className="w-1/4">
                      <img
                        src={`/ProductImages/${carts.product.image}`}
                        alt={`/ProductImages/${carts.product.image}`}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      {/* <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                      RF293
                    </p> */}
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          {carts.product.name}
                        </p>
                        <select
                          className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                          id="quantity_feild"
                          onClick={() => {
                            updateCart(carts.id);
                          }}
                        >
                          <option value={1}>01</option>
                          <option value={2}>02</option>
                          <option value={3}>03</option>
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Height: 10 inches
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Color: Black
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600">
                        Composition: 100% calf leather
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Add to favorites
                          </p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          ${carts.product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <br />
                <div className="border-t border-gray-200 py-12 px-12 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalAmount}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => setOpen(false)}
                      >
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {` /* width */
    #scroll::-webkit-scrollbar {
        width: 1px;
    }
    
    /* Track */
    #scroll::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    /* Handle */
    #scroll::-webkit-scrollbar-thumb {
        background: rgb(133, 132, 132);
    }
    `}
      </style>
    </>
  );
};

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
      <div class="mb-2 text-sm font-normal">Product added in to the cart.</div>
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
</div>;

export default Navigation;
