import { useEffect, useState } from "react";
import { addToDb, clear } from "../../fakeDb/fakeDb";
import { useCart } from "../../hooks/useCart";
import CartSummary from "../CartSummary/CartSummary";
import Product from "../Product/Product";
const Shop = () => {
  const [products, setProduct] = useState([]);
  const [carts, setCart, loading] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const page = Math.ceil(count / size);
        setPageCount(page);
      });
  }, [size]);
  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [page, size]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = carts.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    addToDb(selectedProduct._id);
    setCart(newCart);
  };
  const Clear = () => {
    setCart([]);
    clear();
  };
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-1 bg-slate-100">
        <div className="md:col-span-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center my-5 mx-5 md:order-1 order-2">
          {products.map((product) => (
            <Product
              key={product._id}
              addToCart={addToCart}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="text-white bg-slate-600 md:sticky top-[90px] md:h-[90vh] h-[60vh] md:order-2 order-1 md:block md:m-0 mx-7 my-3 md:shadow shadow-xl rounded-md">
          {
            <CartSummary
              carts={carts}
              loading={loading}
              Clear={Clear}
            ></CartSummary>
          }
        </div>
      </div>
      <div className="my-3">
        {[...Array(pageCount).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`${
              num === page ? "bg-yellow-600" : "bg-emerald-800 "
            } border mx-2 my-2 px-2 border-black text-white`}
          >
            {num + 1}
          </button>
        ))}
        <select
          defaultValue={"10"}
          className="bg-emerald-800 border mx-2 my-2 px-2 border-black text-white"
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
