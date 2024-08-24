import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import FoodVision from "../images/food_vision.png";
import ReVision from "../images/revision.webp";
import NNet from "../images/nnet.png";
import RagOptimize from "../images/ragoptimize.png";
import CelestialClassify from "../images/celestialclassify.png";
import BookRecommender from "../images/book_recommender.webp";
import pystock from "../images/pystock.png";
import optionalyzer from "../images/optionalyzer.png";
import DeepDream from "../images/deepdream.jpg";
import LightingProduct from "../images/lightingproduct.jpg";
import Contrails_Identification from "../images/contrails_identification.jpg";
import Hangman from "../images/hangman.png";
import NLPDisasterTweets from "../images/disaster_tweets.png";
import DigitRecognizer from "../images/MNIST.png";
import HousePrices from "../images/house_price.jpeg";
import SpeechRecognition from "../images/speech.png";
import React from "react";
const projectConfig = [
  {
    id: "project-15",
    title: "ReVision",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/ReVision",
        icon: <AiFillGithub />,
      },
      {
        name: "website",
        url: "https://hari31416.notion.site/10a70e2c390f4e119cb709b712d3b168?v=8224d1d9652e48fd83100ab516a228d3&pvs=74",
        icon: <AiFillEye />,
      },
    ],
    image: ReVision,
    description:
      "Implementing various groundbreaking computer vision architecture from scratch using Tensorflow.",
    target: "_blank",
  },
  {
    id: "project-14",
    title: "RagOptimize",
    links: [
      {
        name: "repo",
        url: "https://github.com/BitwiseBrains/RagOptimize",
        icon: <AiFillGithub />,
      },
    ],
    image: RagOptimize,
    description:
      "Fine-Tuning Mistral-7B on financial dataset and created a RAG to answer questions on a financial dataset or article.",
    target: "_blank",
  },
  {
    id: "project-13",
    title: "CelestialClassify",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/CelestialClassify",
        icon: <AiFillGithub />,
      },
    ],
    image: CelestialClassify,
    description:
      "Training machine learning models to classify celestial objects using data from the SDSS",
    target: "_blank",
  },
  {
    id: "project-12",
    title: "Book Recommender",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/book_recommender",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/book_recommender/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: BookRecommender,
    description:
      "Building a book recommendation system using collaborative filtering, content-based filtering and matrix factorization.",
    target: "_blank",
  },
  {
    id: "project-11",
    title: "pystock",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/pystock",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/pystock/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "docs",
        url: "https://hari31416.github.io/pystock/html/index.html",
        icon: <ImBook />,
      },
    ],
    image: pystock,
    description:
      "Creating a library for portfolio optimization using models like CAPM, SIM, FF3, and FF5",
    target: "_blank",
  },
  {
    id: "project-19",
    title: "NNet",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/NNet",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/NNet/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: NNet,
    description:
      "A module for constructing and optimizing an arbitrary neural network architecture using Python and NumPy, with backpropagation and gradient descent.",
    target: "_blank",
  },
  {
    id: "project-9",
    title: "LightingProduct",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/LightingProduct",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/LightingProduct/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "website",
        url: "https://huggingface.co/spaces/hari31416/LightingProduct",
        icon: <AiFillEye />,
      },
      {
        name: "docs",
        url: "https://github.com/Hari31416/LightingProduct/blob/main/README.md",
        icon: <ImBook />,
      },
    ],
    image: LightingProduct,
    description:
      "Parsing PDFs, extracting product information and creating an NLP model to predict whether a product is a lighting product or not.",
    target: "_blank",
  },
  {
    id: "project-8",
    title: "FoodVision",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/Portfolio/tree/main/projects/Food%20Vision",
        icon: <AiFillGithub />,
      },
      {
        name: "website",
        url: "https://huggingface.co/spaces/hari31416/FoodVision",
        icon: <AiFillEye />,
      },
    ],
    image: FoodVision,
    description:
      "Using Transfer Learning with EfficientNet to classify 101 types food images.",
    target: "_blank",
  },
  {
    id: "project-6",
    title: "optionalyzer",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/optionalyzer",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/optionalyzer/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "docs",
        url: "https://github.com/Hari31416/optionalyzer/blob/main/Working_with_optionalyzer.ipynb",
        icon: <ImBook />,
      },
    ],
    image: optionalyzer,
    description:
      "Creating a library for option pricing and greeks calculation using Black-Scholes model. Can be used for building option trading strategies.",
    target: "_blank",
  },
  {
    id: "project-6",
    title: "NLP With Disaster Tweets",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/Portfolio/tree/main/projects/Disaster_Tweets",
        icon: <AiFillGithub />,
      },
    ],
    image: NLPDisasterTweets,
    description: "Implementing Google's DeepDream algorithm using PyTorch.",
    target: "_blank",
  },
  {
    id: "project-5",
    title: "DeepDream",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/DeepDream",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/DeepDream/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: DeepDream,
    description: "Implementing Google's DeepDream algorithm using PyTorch.",
    target: "_blank",
  },
  {
    id: "project-4",
    title: "Contrails Identification",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/Identify_Contrails",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/Identify_Contrails/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: Contrails_Identification,
    description:
      "Training ML models to identify contrails in satellite images using image segmentation.",
    target: "_blank",
  },
  {
    id: "project-3",
    title: "Hangman",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/hangman",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Hari31416/hangman/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "docs",
        url: "https://github.com/Hari31416/hangman/blob/main/algorithm.md",
        icon: <ImBook />,
      },
    ],
    image: Hangman,
    description:
      "Developing an advanced Hangman solver algorithm using ngram models with NLTK.",
    target: "_blank",
  },
  {
    id: "project-2",
    title: "Digit Recognizer",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/Portfolio/tree/main/projects/MNIST_Digits",
        icon: <AiFillGithub />,
      },
    ],
    image: DigitRecognizer,
    description: "Training a CNN model to recognize handwritten digits.",
    target: "_blank",
  },
  {
    id: "project-1",
    title: "House Prices Prediction",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/Portfolio/tree/main/projects/Housing_Price",
        icon: <AiFillGithub />,
      },
    ],
    image: HousePrices,
    description: "Predicting house prices using regression models.",
    target: "_blank",
  },
  {
    id: "project-0",
    title: "TensorFlow Speech Recognition Challenge",
    links: [
      {
        name: "repo",
        url: "https://github.com/Hari31416/Portfolio/tree/main/projects/TensorFlow_Speech_Recognition",
        icon: <AiFillGithub />,
      },
    ],
    image: SpeechRecognition,
    description: "Training a nueral networks to recognize spoken words.",
    target: "_blank",
  },
];

export default projectConfig