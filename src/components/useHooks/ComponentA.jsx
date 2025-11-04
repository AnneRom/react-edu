import Modal from "./Modal";
import { useToggle } from "./useToggle";

const add = (a, b) => a + b;

const ComponentA = () => {
  const { isOpen, open, close } = useToggle();

  const sum = add(3, 3);


  return (
    <>
      <p>Sum: {sum}</p>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};
export default ComponentA;