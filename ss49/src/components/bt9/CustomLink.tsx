import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CustomLink() {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const url = window.location.origin + "/home-page";
    if (window.location.href === url) {
      navigate("/home-page");
    } else {
      navigate("/not-found");
    }
  };
  return (
    <>
      <Link to="/home-page" onClick={handleClick}>
      Go to Home Page
    </Link>
    </>
  );
}
