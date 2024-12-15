import ReactDOM from "react-dom";
import Card from "./Card";
import CloseIcon from "../assets/images/close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 flex z-40" onClick={onClose}></div>
      <Card className="fixed w-[320px] max-h-[calc(100vh-40px)] overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[-10vh] z-50 pt-10">
        <button
          className="absolute top-2 right-2 hover:opacity-70 p-2"
          onClick={onClose}
        >
          <img src={CloseIcon} width={20} height={20} alt="" />
        </button>
        {children}
      </Card>

    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;