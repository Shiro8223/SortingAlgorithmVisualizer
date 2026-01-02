// Function to get URL query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Map
const sortingAlgorithms = {
    bubble: {
        name: "Bubble Sort",
        complexity: "O(n²)",
        description: "Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.",
        exCode: `
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
`
    },
    merge: {
        name: "Merge Sort",
        complexity: "O(n log n)",
        description: "Merge Sort divides the array into halves, sorts them, and then merges them.",
        exCode: `
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
`
    },
    quick: {
        name: "Quick Sort",
        complexity: "O(n log n)",
        description: "Quick Sort selects a pivot and partitions the array into smaller and larger elements.",
        exCode: `
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
`
    },
    bogo: {
        name: "Bogo Sort",
        complexity: "O(∞)",
        description: "Bogo Sort shuffles the array randomly until it happens to be sorted.",
        exCode: `
import random

def bogo_sort(arr):
    while not is_sorted(arr):
        random.shuffle(arr)
    return arr

def is_sorted(arr):
    return all(arr[i] <= arr[i+1] for i in range(len(arr)-1))
`
    },
    insertion: {
        name: "Insertion Sort",
        complexity: "O(n²)",
        description: "Insertion Sort builds the sorted array one element at a time.",
        exCode: `
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
`
    },
    selection: {
        name: "Selection Sort",
        complexity: "O(n²)",
        description: "Selection Sort repeatedly finds the minimum element and places it at the beginning.",
        exCode: `
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
`
    },
    heap: {
        name: "Heap Sort",
        complexity: "O(n log n)",
        description: "Heap Sort uses a binary heap data structure to efficiently sort elements.",
        exCode: `
def heap_sort(arr):
    n = len(arr)
    
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extract elements from heap
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)

def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
`
    },
    shell: {
        name: "Shell Sort",
        complexity: "O(n log n)",
        description: "Shell Sort is an optimized insertion sort that allows exchanges of far apart elements.",
        exCode: `
def shell_sort(arr):
    n = len(arr)
    gap = n // 2
    
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            arr[j] = temp
        gap //= 2
`
    },
    cocktail: {
        name: "Cocktail Shaker Sort",
        complexity: "O(n²)",
        description: "Cocktail Shaker Sort is a bidirectional bubble sort that traverses in both directions.",
        exCode: `
def cocktail_sort(arr):
    n = len(arr)
    swapped = True
    start = 0
    end = n - 1
    
    while swapped:
        swapped = False
        
        # Forward pass
        for i in range(start, end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        
        if not swapped:
            break
        
        swapped = False
        end -= 1
        
        # Backward pass
        for i in range(end - 1, start - 1, -1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        
        start += 1
`
    },
    comb: {
        name: "Comb Sort",
        complexity: "O(n²)",
        description: "Comb Sort improves on bubble sort by using gap sequences to eliminate small values near the end.",
        exCode: `
def comb_sort(arr):
    n = len(arr)
    gap = n
    shrink = 1.3
    sorted = False
    
    while not sorted:
        gap = int(gap / shrink)
        if gap <= 1:
            gap = 1
            sorted = True
        
        i = 0
        while i + gap < n:
            if arr[i] > arr[i + gap]:
                arr[i], arr[i + gap] = arr[i + gap], arr[i]
                sorted = False
            i += 1
`
    }
};


// Get the selected algorithm from the URL
const selectedAlgo = getQueryParam("algo");

// If algorithm is found in the map, update the page
if (sortingAlgorithms[selectedAlgo]) {
    document.getElementById("algorithmTitle").innerText = sortingAlgorithms[selectedAlgo].name;
    document.getElementById("algorithmComplexity").innerText = sortingAlgorithms[selectedAlgo].complexity;
    document.getElementById("algorithmDescription").innerText = sortingAlgorithms[selectedAlgo].description;
    document.getElementById("exampleCode").innerText = sortingAlgorithms[selectedAlgo].exCode;
} else {
    document.getElementById("algorithmTitle").innerText = "error";
    document.getElementById("algorithmComplexity").innerText = "";
    document.getElementById("algorithmDescription").innerText = "";
    document.getElementById("exampleCode").innerText = "error loading code.";
}


// Script for the sorting visualizer
const canvas = document.getElementById("sortingCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions based on container
function setCanvasSize() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth - 64; // Account for padding
    canvas.height = 380;
}

// Initialize canvas size
setCanvasSize();

// Update canvas size on window resize
window.addEventListener('resize', () => {
    setCanvasSize();
    drawArray();
});

let array = [];

// Function to generate a new random array based on the size provided
function generateArray(size) {
    cancelSorting();
    array = Array.from({ length: size }, () => Math.floor(Math.random() * canvas.height));
    drawArray();
}

// Draw array with color gradient from blue to red
function drawArray() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    
    // Find min/max for values
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);

    array.forEach((value, index) => {
        const normalized = (value - minValue) / (maxValue - minValue);
        const hue = 240 - normalized * 240; 
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(index * barWidth, canvas.height - value, barWidth, value);
    });
}

// Bubble Sort 
async function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                await sleep(10);  
                drawArray();
            }
        }

        if (!swapped) break;
    }

    drawArray();
}

// Merge Sort 
async function mergeSort(arr, l, r) {
    if (l >= r) return;
    let mid = Math.floor((l + r) / 2);
    await mergeSort(arr, l, mid);
    await mergeSort(arr, mid + 1, r);
    await merge(arr, l, mid, r);
    drawArray();
}

// Merge function for Merge Sort
async function merge(arr, l, mid, r) {
    let left = arr.slice(l, mid + 1);
    let right = arr.slice(mid + 1, r + 1);
    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
        arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
        await sleep(5);
        drawArray();
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
}

// Delay function to slow down animations
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Quick Sort 
async function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = await partition(arr, low, high);
        await quickSort(arr, low, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, high);
    }
    drawArray();
}

// Partition function for Quick Sort
async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            await sleep(5);
            drawArray();
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    await sleep(5);
    drawArray();

    return i + 1;
}

// Bogo Sort 
async function bogoSort(arr) {
    while (!isSorted(arr)) {
        arr.sort(() => Math.random() - 0.5);
        await sleep(10);
        drawArray();
    }
    drawArray();
}

function isSorted(arr) {
    return arr.every((val, idx, arr) => idx === 0 || arr[idx - 1] <= val);
}

// Insertion Sort 
async function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
            await sleep(10);
            drawArray();
        }

        arr[j + 1] = current;
        await sleep(10);  
        drawArray();
    }

    drawArray();
}

// Selection Sort
async function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
            await sleep(5);
            drawArray();
        }
        
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            await sleep(10);
            drawArray();
        }
    }
    drawArray();
}

// Heap Sort
async function heapSort(arr) {
    let n = arr.length;
    
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }
    
    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        await sleep(10);
        drawArray();
        await heapify(arr, i, 0);
    }
    drawArray();
}

async function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        await sleep(5);
        drawArray();
        await heapify(arr, n, largest);
    }
}

// Shell Sort
async function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);
    
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
                await sleep(5);
                drawArray();
            }
            arr[j] = temp;
            await sleep(5);
            drawArray();
        }
        gap = Math.floor(gap / 2);
    }
    drawArray();
}

// Cocktail Shaker Sort
async function cocktailSort(arr) {
    let n = arr.length;
    let swapped = true;
    let start = 0;
    let end = n - 1;
    
    while (swapped) {
        swapped = false;
        
        // Forward pass
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                await sleep(10);
                drawArray();
            }
        }
        
        if (!swapped) break;
        
        swapped = false;
        end--;
        
        // Backward pass
        for (let i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                await sleep(10);
                drawArray();
            }
        }
        start++;
    }
    drawArray();
}

// Comb Sort
async function combSort(arr) {
    let n = arr.length;
    let gap = n;
    const shrink = 1.3;
    let sorted = false;
    
    while (!sorted) {
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }
        
        let i = 0;
        while (i + gap < n) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                sorted = false;
                await sleep(5);
                drawArray();
            }
            i++;
        }
    }
    drawArray();
}


// Handling size slider/input events
const sizeSlider = document.getElementById("arraySize");
const sizeValue = document.getElementById("sizeValue");

// Event listener for slider change
sizeSlider.addEventListener("input", () => {
    sizeValue.value = sizeSlider.value; 
    generateArray(parseInt(sizeSlider.value)); 
});

// Event listener for input field change
sizeValue.addEventListener("input", () => {
    let value = parseInt(sizeValue.value);

    if (value < 10) value = 10;
    if (value > 5000) value = 5000;

    sizeValue.value = value;
    sizeSlider.value = value;
    generateArray(value);
});

// Generate new array button event listener
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", () => {
    const size = parseInt(sizeSlider.value); 
    generateArray(size);
});

// Sorting in progress check
let sortingInProgress = false;

function cancelSorting() {
    sortingInProgress = false;
}

// Dynamically choose the algorithm
function startSorting() {
    const algorithm = sortingAlgorithms[selectedAlgo];
    if (!algorithm) return; 

    // Ensure sorting isn't already in progress
    if (sortingInProgress) return;
    sortingInProgress = true;

    // Call the sorting function based on the selected algorithm
    switch (selectedAlgo) {
        case "bubble":
            bubbleSort(array).then(() => sortingInProgress = false);
            break;
        case "merge":
            mergeSort(array, 0, array.length - 1).then(() => sortingInProgress = false);
            break;
        case "quick":
            quickSort(array, 0, array.length - 1).then(() => sortingInProgress = false);
            break;
        case "bogo":
            bogoSort(array).then(() => sortingInProgress = false);
            break;
        case "insertion":
            insertionSort(array).then(() => sortingInProgress = false);
            break;
        case "selection":
            selectionSort(array).then(() => sortingInProgress = false);
            break;
        case "heap":
            heapSort(array).then(() => sortingInProgress = false);
            break;
        case "shell":
            shellSort(array).then(() => sortingInProgress = false);
            break;
        case "cocktail":
            cocktailSort(array).then(() => sortingInProgress = false);
            break;
        case "comb":
            combSort(array).then(() => sortingInProgress = false);
            break;
        default:
            console.error("Invalid algorithm selected!");
            sortingInProgress = false;
    }
}

// Initial array generation
generateArray(100); 

