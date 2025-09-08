import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

// Test Suite ---> Multiple test Together   // "build": "vite build", --=> packa.json

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getAllByAltText("heroimg");
    expect(heroImage).tobeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "./images/homeHero.png");
  });
});


