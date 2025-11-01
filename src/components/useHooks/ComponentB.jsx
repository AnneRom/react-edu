import Sidebar from "./Sidebar";
import { useToggle } from "./useToggle";

const ComponentB = () => {
  const { isOpen, open, close} = useToggle(false);

  return (
    <>
      <button onClick={open}>Open sidebar</button>
      <Sidebar isOpen={isOpen} onClose={close} />
    </>
  );
};
export default ComponentB;