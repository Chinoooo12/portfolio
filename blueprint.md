# Project Blueprint: Personal Portfolio

## Overview

This document outlines the structure, design, and features of a personal portfolio website. The goal is to create a modern, visually appealing, and interactive single-page application to showcase skills and work.

## Implemented Features

### 1. Hero Section

*   **Typewriter Effect:** The main heading (`<h1>`) and subheading (`<p>`) in the hero section use a JavaScript-powered typewriter effect to display text dynamically, character by character. This creates a modern and engaging introduction.
    *   **Content:**
        *   **Title:** "Creative Designer & Developer"
        *   **Subtitle:** "I build beautiful and functional things for the web."

### 2. Skills Section

*   **Dynamic Skill Injection:** The skills are generated dynamically using JavaScript from an array of objects. This makes it easy to update, add, or remove skills without touching the HTML.
*   **Animated Progress Bars:** Each skill is represented by a name and a progress bar that animates from 0% to the specified skill level, providing a visually engaging representation of proficiency.
*   **Current Skills:**
    *   HTML
    *   Animacion
    *   Dibujo
    *   Diseño
    *   Fotografia

### 3. General Structure

*   **Single-Page Application:** The portfolio is a single HTML file (`index.html`) with clear sections for Hero, Work, Skills, and Contact.
*   **Modular JavaScript:** The interactivity is handled by `main.js`, which is linked at the end of the body.
*   **External Styling:** All styles are managed in a separate `style.css` file.

## Design and Style

*   **Typography:** Uses the 'Space Grotesk' font from Google Fonts for a modern, clean aesthetic.
*   **Color Palette:** A simple and clean palette with a primary blue accent for interactive elements.
*   **Layout:** The layout is responsive and uses CSS Flexbox and Grid for alignment and structure.
*   **Animations:** Transitions are used on skill bars and links to provide smooth visual feedback.

## Current Plan

This section is for outlining the next set of features or changes to be implemented.
