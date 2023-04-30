"use client";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "../ui/Button";
interface ModalProps {
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  disabled?: boolean;
  actionLabel?: string;
  footer?: React.ReactElement;
  onClose?: () => void;
  onSubmit?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  body,
  secondaryAction,
  secondaryActionLabel,
  disabled,
  actionLabel,
  footer,
  onClose,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    if (!onClose) return;
    setTimeout(() => {
      onClose();
    });
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled || !onSubmit) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
        <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
          {/*CONTENT*/}
          <div
            className={`translate h-full duration-300 ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
              {/*HEADER*/}
              <div className="rounded-t relative flex items-center justify-center border-b-[1px] p-6">
                <button
                  className="absolute left-9 border-0 p-1 transition hover:opacity-70"
                  onClick={handleClose}
                >
                  <AiOutlineCloseCircle />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*BODY*/}
              <div className="relative flex-auto p-6">{body}</div>
              {/*FOOTER*/}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex w-full flex-row items-center gap-4">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      variant="outline"
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                    >
                      {secondaryActionLabel}
                    </Button>
                  )}
                  <Button disabled={disabled} onClick={handleSubmit}>
                    {actionLabel}
                  </Button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
