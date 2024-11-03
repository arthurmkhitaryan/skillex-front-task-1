export const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
  
    if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) return false;
  
    return keys1.every(key => deepEqual(obj1[key], obj2[key]));
};
  