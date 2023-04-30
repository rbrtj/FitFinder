"use client";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "../ui/Button";
import useLoginModal from "~/hooks/useLoginModal";
const User = () => {
  const loginModal = useLoginModal();
  return (
    <div>
      <div className="flex items-center gap-4">
        <AiOutlineUser size={24} />
        <Button variant="outline" onClick={loginModal.onOpen}>
          Login
        </Button>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default User;
