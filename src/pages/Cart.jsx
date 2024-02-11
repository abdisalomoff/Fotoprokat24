import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DeleteBtn from "../assets/icons/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, deleteItem, removeToCart } from "../components/redux/slice/cart.slice";
import { useState } from "react";
import EmptyCart from "../components/UI/EmptyCart/EmptyCart";
import { TiDeleteOutline } from "react-icons/ti";
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (productId) => {
    const find = cartItems.find((item) => item.product_id === productId);
    if (find) {
      if (find.quantity > 1) {
        dispatch(removeToCart({ product_id: productId }));
      } else {
        dispatch(removeToCart({ product_id: productId }));
      }
    }
  };
  

  const handleAddToCart = (item) =>{
    dispatch(addToCart(item))
  }

  const handleDeleteItem = (productId) =>{
    dispatch(deleteItem(productId));
  }

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const itemPrice = item.product_num_reviews * item?.quantity;
      return total + itemPrice;
    }, 0);
    return totalPrice;
  };


  const handleCheck = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    handleClearCart();
  };


  
  return (
    <main>
      <section className="cart container">
        <h5 className="cart__heading">Главная / Корзина</h5>
        <h1 className="cart__type">Корзина</h1>

        {cartItems.length === 0 ? ( <EmptyCart/> ) :(
        <>
        <button className="table__clearbtn" onClick={handleClearCart}>Очистить <TiDeleteOutline /></button>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className="table__cell">Фото</p>
                </TableCell>
                <TableCell align="left">
                  <p className="table__cell">Название</p>
                </TableCell>
                <TableCell align="left">
                  <p className="table__cell">Цена</p>
                </TableCell>
                <TableCell align="center">
                  <p className="table__cell">Количество</p>
                </TableCell>
                <TableCell align="left">
                  <p className="table__cell">Итого</p>
                </TableCell>
                <TableCell align="right">
                  <p className="table__cell">Oтменить</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {cartItems.map((item) => (
              <TableRow
                key={item?.product_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img className="th__img" src={item?.product_photos[0]} alt="img" />
                </TableCell>
                <TableCell align="left">
                  <h2 className="th__title">{item?.product_title}</h2>
                  <p className="th__mark">{item?.offer?.store_name}</p>
                </TableCell>
                <TableCell align="left">
                    {/* PRODUCT PRICE SI SIFATIDA API DA KELGAN QANDAYDIR NUMBER KO"RINISHDAGI MANZILDAN FOYDALANILDI PRICE YO'Q EKANLIGI UCHUN (Total price da faqatgina будний dagi qiymat hisoblandi)
                    */}
                  <p className="th__price">{item?.product_num_reviews} ₽</p>
                </TableCell>
                <TableCell>
                  <div className="table__buttons">
                  <button className="table__dec" onClick={() => handleRemoveFromCart(item?.product_id)}>-</button>
                    <span>{item?.quantity}</span>
                    <button className="table__inc" onClick={()=> handleAddToCart(item)}>+</button>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <p className="table__totalproductprice">{item.product_num_reviews * item.quantity} ₽</p>
                </TableCell>
                <TableCell align="right">
                  <button className="table__deletebtn"  onClick={() => handleDeleteItem(item.product_id)}>
                    <img src={DeleteBtn} alt="delete" />
                  </button>
                </TableCell>
              </TableRow>
                        ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="cart__total">
          <span>Итого:</span>
          <p>{calculateTotalPrice()} ₽</p>
        </div>

        <button className="cart__oformit" onClick={handleCheck}>Оформить заказ</button>

        <Dialog open={isModalOpen} onClose={handleCloseModal}>
          <DialogTitle style={{textAlign: 'center'}}>Ваш заказ принят!</DialogTitle>
          <DialogContent>
            <p>Спасибо за покупку. Ваш заказ успешно принят.</p>
          </DialogContent>
          <Button onClick={handleCloseModal}>Закрыть</Button>
        </Dialog>
        </>
        )}
      </section>
    </main>
  );
};

export default Cart;
