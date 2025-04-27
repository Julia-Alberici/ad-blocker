# Ad Blocker

A browser extension that automatically removes sponsored content and advertisements from websites. Currently supports LinkedIn with plans to expand to other platforms.

## Features

- Automatically detects and removes sponsored posts from LinkedIn
- Supports multiple languages for LinkedIn ads (English, Spanish, French, German, Italian, Japanese, Korean, Portuguese, Russian, and Chinese)
- Lightweight and efficient implementation
- No configuration required - works out of the box
- Extensible architecture for adding support for more websites

## Installation

### Chrome/Edge
1. Download or clone this repository
2. Open your browser and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the project directory

## How it Works

The extension works by:
1. Monitoring web pages for sponsored content
2. Identifying sponsored posts using platform-specific detection methods
3. Automatically removing the detected sponsored content
4. Continuously scanning for new sponsored content as you browse

## Current Platform Support

### LinkedIn
The extension currently supports LinkedIn with the following language detection:
- English
- Spanish
- French
- German
- Italian
- Japanese
- Korean
- Portuguese
- Russian
- Chinese

## Development

### Project Structure
- `manifest.json` - Extension configuration
- `linkedin.js` - LinkedIn-specific ad removal logic
- `linkedin.const.js` - LinkedIn-specific constants and language mappings
- `background.js` - Background script for extension functionality

### Building from Source
1. Clone the repository
2. Make your changes
3. Load the extension in developer mode as described in the installation section

### Adding Support for New Platforms
To add support for a new platform:
1. Create a new platform-specific JavaScript file (e.g., `facebook.js`)
2. Implement the ad detection and removal logic
3. Add the necessary constants and mappings
4. Update the manifest to include the new platform's permissions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. We're particularly interested in:
- Adding support for new platforms
- Improving ad detection algorithms
- Adding support for more languages
- Enhancing performance

## License

This project is open source and available under the MIT License.

## Author

Created by Julia Alberici

## Disclaimer

This extension is not affiliated with any of the supported platforms. Use at your own discretion. 