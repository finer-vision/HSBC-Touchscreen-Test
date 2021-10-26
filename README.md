# HSBC Touchscreen Test

Test web app for HSBC touchscreen.

### Installation

1. Download the [latest release](https://github.com/finer-vision/HSBC-Touchscreen-Test/releases/download/v0.0.0/release.zip)
2. Unzip `release.zip`
3. Open `index.html` in Google Chrome browser

### Contributing Software Requirements

- git >= 2
- npm >= 7
- node >= 16
- zip

### Getting Started (Dev)

```shell
cp env.example.ts env.ts
npm install
npm start # localhost:8080
```

### Build Release

```shell
cp env.example.ts env.ts
npm install
npm run build # generates a build directory with an index.html file inside it

# Generate release zip
zip -r release.zip release
```

[Create a new Release](https://github.com/finer-vision/HSBC-Touchscreen-Test/releases/new) and attach `release.zip`.
