# SortMi

> **A pure HTML/CSS/JavaScript sorting visualizer** — single-page app, no frameworks, built for university. It animates how classic algorithms work, shows their code, and lets you scale the array from **10 → 5000** elements with a slider.

---

<p align="center">
  <img alt="Static badge" src="https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JavaScript-blue"> 
  <img alt="Static badge" src="https://img.shields.io/badge/Frameworks-None-success"> 
  <img alt="Static badge" src="https://img.shields.io/badge/License-Educational-lightgrey">
</p>

---

## ✨ Features

* **Single‑page, no build tools** — open `index.html` and go.
* **Array size slider** — generate **10–5000** bars instantly.
* **Live visualizations** — bar heights animate as comparisons/swaps happen.
* **Code view** — show the algorithm’s JavaScript alongside the animation.
* **Big‑O panel** — displays time/space complexities per algorithm.
* **Speed control & re‑randomize** — tweak delay, make fresh arrays.

> Built deliberately with **vanilla web tech** so students can inspect, learn, and modify without a toolchain.

---

## 🧠 Supported Algorithms

| Algorithm      | Best Case      | Average Case | Worst Case | Space    |
| -------------- | -------------- | ------------ | ---------- | -------- |
| **Quick Sort** | O(n log n)     | O(n log n)   | O(n²)      | O(log n) |
| **Merge Sort** | O(n log n)     | O(n log n)   | O(n log n) | O(n)     |
| **Insertion**  | O(n)           | O(n²)        | O(n²)      | O(1)     |
| **Bubble**     | O(n)           | O(n²)        | O(n²)      | O(1)     |
| **Bogo**       | O(n) *(lucky)* | O(n·n!)      | O(∞/n!)    | O(1)     |

> **Note on Bogo Sort:** included for fun/contrast; it randomly shuffles until sorted. Expect catastrophic runtimes for larger `n` — the UI will warn you.

---

## 🚀 Getting Started

```bash
# Option A: just open the file
open index.html  # (double‑click in Finder/Explorer also works)

# Option B: serve locally for best performance
python -m http.server 8080
# then visit http://localhost:8080
```

---

## 🕹️ Usage

1. Use the **slider** to set array size (**10–5000**).
2. Click **Shuffle** to randomize values.
3. Pick an **algorithm** from the toolbar.
4. Press **Start** to animate; adjust **Speed** as needed.
5. Watch the **Big‑O** panel for complexity and the **code pane** for the implementation.

---

## 🧩 Code Overview

The visualizer uses simple DOM bars (no canvas) and async delays for smooth animation:

```js
// Utility: swap bars & underlying data
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  renderBars(arr);           // updates DOM heights
  return sleep(delayMs);     // yields to animation
}

// Example: Insertion Sort (simplified)
async function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      await swap(arr, j, j - 1);
      j--;
    }
  }
}
```

Algorithms are implemented as **async** functions so animations can yield without blocking the UI. The code pane shows the active algorithm’s source (pretty‑printed).

---

## ⚙️ Project Structure

```
SortMi/
├─ index.html   # Layout, controls, code viewer, and script tags
├─ style.css    # Minimal, responsive styles + color cues for ops
└─ script.js    # Algorithms, rendering, slider logic, and events
```

---

## 📐 Design Notes

* **Scales to 5k elements**: uses batched DOM updates to remain smooth.
* **Color hints**: comparisons vs. swaps get distinct highlights.
* **Reduced motion**: honors `prefers-reduced-motion` where possible.

---

## 🔮 Roadmap

* Pause/Resume & step‑through controls
* Operation counters (comparisons/swaps)
* Export run stats (CSV) for lab reports
* Color‑blind friendly palette

---

## 📜 License

Open source for educational/demo purposes. Feel free to fork for coursework or personal learning.

---

## 📬 Contact

Developed by **Shaun Taylor**
📍 Salford, UK
🌐 [LinkedIn](https://www.linkedin.com/in/shaun-taylor-5796b8288)
💻 [Portfolio Website](ShaunTaylor.site)
