import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn, FaKaggle, FaGoodreadsG } from "react-icons/fa";
import React from "react";

const footerConfig = {
  icons: [
    {
      id: "footer-0",
      url: "https://github.com/hari31416",
      className: "social-icon",
      target: "_blank",
      icon: <AiFillGithub size={50} />,
    },
    {
      id: "footer-1",
      url: "https://linkedin.com/in/hari31416",
      className: "social-icon",
      target: "_blank",
      icon: <FaLinkedinIn size={50} />,
    },
    {
      id: "footer-2",
      url: "https://www.kaggle.com/hari31416",
      className: "social-icon",
      target: "_blank",
      icon: <FaKaggle size={50} />,
    },
    {
      id: "footer-3",
      url: "https://goodreads.com/hari31416",
      className: "social-icon",
      target: "_blank",
      icon: <FaGoodreadsG size={50} />,
    },
  ],
};

export default footerConfig
