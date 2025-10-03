function firstWord(s) {
  // Trim leading/trailing spaces
  s = s.trim();
  // Find the index of the first space
  let index = s.indexOf(' ');
  // If no space found, or string is empty, return the whole string
  if (index === -1) {
    return s;
  }
  // Otherwise, return substring up to first space
  return s.substring(0, index);
}

