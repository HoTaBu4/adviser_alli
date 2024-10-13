
export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

// export function getCookie(name: string): string | null {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   console.log(value)
  
//   if (parts.length === 2) {
//     return decodeURIComponent(parts.pop()?.split(';').shift() || '');
//   }
//   return null;
// }

// export function getCookie(name: string): string | null {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   console.log("All cookies:", document.cookie); // Debugging line

//   if (parts.length === 2) {
//     const cookieValue = parts.pop()?.split(';').shift();
//     console.log(`Raw value for ${name}:`, cookieValue); // Debugging line
//     return decodeURIComponent(cookieValue || '');
//   }

//   console.log(`Cookie ${name} not found`); // Debugging line
//   return null;
// }
