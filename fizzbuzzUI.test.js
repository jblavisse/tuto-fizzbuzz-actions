/**
 * @vitest-environment jsdom
 */

import { describe, beforeEach, expect, it } from "vitest";
import fizzbuzzUI from "./fizzbuzzUI";

describe("Fizzbuzz UI", () => {
  beforeEach(() => {
    // 1. Je rends mon composant
    document.body.innerHTML = `
    <input type="number" id="nb" />
    <button id="btn">OK</button>
    <h1 id="title"></h1>
    `;
    fizzbuzzUI();
  });

  it("transcript nb to title", () => {
    // 2. Simuler l'événement qui m'intéresse
    let nb = document.getElementById("nb");
    nb.value = "5";
    let btn = document.getElementById("btn");
    btn.dispatchEvent(new Event("click"));

    // 3. Vérifie si c'est conforme à ce que j'attends
    let title = document.getElementById("title");
    expect(title.textContent).toBe("buzz");
  });
});
