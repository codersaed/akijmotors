import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "./Sidebar";

const SideMenu = ({ isOpen, closeModal, openModal }) => {
  return (
    <>
      {isOpen ? (
        <button className="text-white mr-2" type="button" onClick={closeModal}>
          <FiX size={30} />
        </button>
      ) : (
        <button className="text-white mr-2" type="button" onClick={openModal}>
          <FiMenu size={30} />
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed top-[216px] lg:top-[164px] left-0 right-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in-out duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed bg-gray-100 top-[216px] lg:top-[164px] left-0 right-0 lg:right-4 bottom-0 bg-opacity-70" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-150"
              enterFrom="opacity-0 transform -translate-x-20"
              enterTo="opacity-100"
              leave="transition ease-in-out duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 transform -translate-x-20"
            >
              <div className="relative bg-white w-64 overflow-y-auto h-screen">
                <Sidebar />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SideMenu;
