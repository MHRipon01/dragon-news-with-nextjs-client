export function showCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based (0-11)
    const year = currentDate.getFullYear();
  
    return`${day}-${month}-${year}`;
  }
  
  // Call the function to display the current date
//   showCurrentDate();
  