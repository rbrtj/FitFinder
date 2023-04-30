"use client";

import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";
import useLoginModal from "~/hooks/useLoginModal";
import { Input } from "../ui/Input";
import { useState } from "react";
import { Button } from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import Modal from "./Modal";
const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="email"
        placeholder="Email"
        disabled={isLoading}
        className={errors ? "border-red-500" : ""}
        required
      />
      <Input
        id="password"
        placeholder="Password"
        disabled={isLoading}
        className={errors ? "border-red-500" : ""}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button variant="outline" onClick={() => signIn("google")}>
        <FcGoogle />
        Continue with google
      </Button>
      <Button variant="outline" onClick={() => signIn("github")}>
        <AiOutlineGithub />
        Continue with Github
      </Button>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
