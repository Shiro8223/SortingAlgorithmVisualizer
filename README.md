# 🎨 SortMi - Sorting Algorithm Visualizer

<div align="center">

![SortMi Banner](https://img.shields.io/badge/SortMi-Algorithm%20Visualizer-667eea?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**An interactive, beautifully designed sorting algorithm visualizer that brings algorithms to life through stunning animations and real-time code examples.**

[View Demo](#-features) • [Getting Started](#-getting-started) • [Algorithms](#-supported-algorithms) • [Contributing](#-contributing)

</div>

---

## 📖 About

SortMi is an educational platform designed to help students, developers, and computer science enthusiasts understand sorting algorithms through interactive visualizations. By combining real-time animations with clean code examples, SortMi bridges the gap between theory and implementation.

### Why SortMi?

- 🎯 **Visual Learning** - Watch algorithms sort data in real-time with beautiful color-coded animations
- 📚 **Code Examples** - View Python implementations alongside visualizations
- 🎨 **Modern Design** - Professional glassmorphism UI with smooth animations
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Interactive** - Adjust array size and speed to see how algorithms perform
- 🆓 **100% Free** - No ads, no tracking, completely open source

---

## ✨ Features

### 🔥 Core Features

- **10+ Sorting Algorithms** - From classics like Bubble Sort to advanced algorithms like Heap Sort
- **Real-Time Visualization** - Color-gradient bars showing sorting progress with smooth animations
- **Interactive Controls** - Generate new arrays, adjust size (10-5000 elements), and control sorting
- **Code Display** - Side-by-side code examples in Python for each algorithm
- **Complexity Information** - Big O notation displayed for each algorithm
- **Responsive Design** - Fully responsive layout that works on all screen sizes
- **Professional UI** - Modern gradient backgrounds, glassmorphism effects, and smooth transitions

### 🎨 Design Highlights

- Custom gradient color scheme (purple/indigo theme)
- Glassmorphism navigation and cards
- Smooth CSS animations and transitions
- Custom styled form controls and sliders
- Professional typography with Inter and JetBrains Mono fonts
- Dynamic canvas sizing for optimal viewing

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required!

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/sortmi.git
   cd sortmi
   ```

2. **Open the project**

   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. **Start exploring!**
   - Navigate to `http://localhost:8000` (if using a local server)
   - Click "Start Exploring" and choose an algorithm

---

## 📊 Supported Algorithms

| Algorithm                | Time Complexity | Space Complexity | Type             |
| ------------------------ | --------------- | ---------------- | ---------------- |
| **Bubble Sort**          | O(n²)           | O(1)             | Comparison       |
| **Insertion Sort**       | O(n²)           | O(1)             | Comparison       |
| **Selection Sort**       | O(n²)           | O(1)             | Comparison       |
| **Merge Sort**           | O(n log n)      | O(n)             | Divide & Conquer |
| **Quick Sort**           | O(n log n)      | O(log n)         | Divide & Conquer |
| **Heap Sort**            | O(n log n)      | O(1)             | Comparison       |
| **Shell Sort**           | O(n log n)      | O(1)             | Insertion-based  |
| **Cocktail Shaker Sort** | O(n²)           | O(1)             | Bubble-based     |
| **Comb Sort**            | O(n²)           | O(1)             | Bubble-based     |
| **Bogo Sort**            | O(∞)            | O(1)             | Random           |

### Algorithm Details

#### 🔵 **Simple Sorts** (Great for learning)

- **Bubble Sort** - Repeatedly swaps adjacent elements
- **Insertion Sort** - Builds sorted array one element at a time
- **Selection Sort** - Repeatedly finds minimum element

#### 🟢 **Efficient Sorts** (Production-ready)

- **Merge Sort** - Divide and conquer with guaranteed O(n log n)
- **Quick Sort** - Fast average case with pivot partitioning
- **Heap Sort** - Uses binary heap data structure

#### 🟡 **Optimized Variants**

- **Shell Sort** - Improved insertion sort with gap sequences
- **Cocktail Shaker Sort** - Bidirectional bubble sort
- **Comb Sort** - Bubble sort with gap optimization

#### 🔴 **Fun & Educational**

- **Bogo Sort** - Random shuffle until sorted (don't use in production!)

---

## 🎮 Usage

### Selecting an Algorithm

1. Navigate to the **Visualizers** page
2. Choose from 10 available sorting algorithms
3. Click **Select** to open the visualizer

### Using the Visualizer

1. **Generate Array** - Click to create a new random array
2. **Adjust Size** - Use the slider or input field (10-5000 elements)
3. **Sort** - Click the Sort button to watch the algorithm in action
4. **View Code** - Check the right panel for Python implementation

### Tips

- Start with smaller arrays (100-200) to see individual comparisons
- Use larger arrays (1000+) to see overall algorithm performance
- Try different algorithms on the same data to compare efficiency
- Bogo Sort is for educational purposes - use small arrays (< 10 elements)!

---

## 🛠️ Project Structure

```
sortmi/
├── index.html              # Landing page
├── algorithm.html          # Algorithm selection page
├── visualizer.html         # Main visualizer interface
├── aboutUs.html           # About page with project info
├── contact.html           # Contact form
├── styles.css             # All styling (modern design system)
├── script.js              # Sorting algorithms & visualizations
└── README.md              # You are here!
```

---

## 🎨 Color Palette

```css
Primary Gradient:    linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Background:          Purple/Indigo gradient
Cards:               rgba(255, 255, 255, 0.95) with backdrop blur
Canvas:              Dark gradient (#1a1a2e → #16213e)
Code Block:          Dark theme (#1a1a2e)
Text:                #1a202c (dark) / #ffffff (light)
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute

1. **Add New Algorithms** - Implement new sorting algorithms
2. **Improve Visualizations** - Enhance animations and visual feedback
3. **Bug Fixes** - Report and fix bugs
4. **Documentation** - Improve code comments and documentation
5. **UI/UX** - Suggest design improvements

### Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🌟 Acknowledgments

- Inspired by the need for better algorithm education tools
- Built as a university project to help students learn sorting algorithms
- Special thanks to the computer science education community

---

## 📧 Contact

- **Project**: SortMi - Sorting Algorithm Visualizer
- **Year**: 2025
- **Purpose**: Educational Tool for Algorithm Visualization

---

<div align="center">

**Made with ❤️ for the CS education community**

⭐ Star this repo if you found it helpful!

</div>
