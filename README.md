# Poseidon Hash

This repository contains programs, tests, and auxiliary scripts for comparing the Poseidon hash result on provable SDK with the Leo program.
**It seems like the hashes that provable SDK generates are unmatched by the hashes on Leo, so the test is not working.**

## Getting Started

1. **Install Dependencies**  
   - Navigate to the repository root and run:  
      `npm install`

2. **Install dokojs globally using npm** https://github.com/venture23-aleo/doko-js
      `npm install -g @doko-js/cli@latest`

4. **Build the Contracts**  
    - `dokojs compile`

## Run Tests  
   - **Run devnet** 
   `./devnet.sh` following instructions from snarkOS https://github.com/ProvableHQ/snarkOS/blob/staging/devnet.sh`
   
   - **Run tests**
   `npm test`

## Contributing

Contributions are welcome. Please create pull requests with detailed descriptions and adhere to the repository's coding guidelines.

## License

This repository is licensed under the Apache License, Version 2.0.  
See the [LICENSE](./LICENSE) file for details.