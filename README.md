# JSON Formatter Tool

A simple Chrome Extension to convert JSON string ↔ Pretty JSON with one textarea and copy functionality.

## Features

- Convert JSON string to formatted Pretty JSON
- Convert Pretty JSON back to JSON string
- Copy JSON content to clipboard
- Single textarea for input/output
- Uses Tailwind CSS for styling

## Install

### Local Install

1. Clone or download this repository.
2. Open Chrome, go to `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**, select the extension folder.

### Build Tailwind CSS (if needed)

If using local Tailwind CSS:

```bash
npx tailwindcss -i ./input.css -o ./tailwind.min.css --minify
