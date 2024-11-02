
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  
  
  const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const idx1 = Math.floor(Math.random() * arr.length);
      const idx2 = Math.floor(Math.random() * arr.length);
      swap(arr, idx1, idx2);
    }
  };
  
 
  const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
 
  const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      swap(arr, i, minIdx);
    }
  };
  
  
  const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      const pivotIndex = particionamento(arr, left, right);
      quick_sort(arr, left, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, right);
    }
  };
  
 
  const particionamento = (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, right);
    return i + 1;
  };
  