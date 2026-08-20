import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Page Not Found — Scaffold"
        description="The page you are looking for does not exist."
        canonical="/"
      />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-6xl font-bold text-bone mb-4">404</h1>
        <p className="text-xl text-bone/70 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-bone text-dark-bg font-semibold rounded-lg hover:bg-bone/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
