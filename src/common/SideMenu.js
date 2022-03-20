import React, { Fragment, useState } from "react";
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
          className="fixed lg:top-40 left-0 right-0 z-10 overflow-y-auto"
          style={{ top: "200px" }}
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
              <Dialog.Overlay className="fixed top-48 lg:top-40 left-0 right-4 bottom-0 bg-gray-100 bg-opacity-70" />
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
              <div className="relative bg-white w-64">
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
