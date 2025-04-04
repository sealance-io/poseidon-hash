# Poseidon Hash Experiments

This repository contains programs, tests, and auxiliary scripts for comparing the Poseidon hash results across the customized `@noble/curves` library, the Provable SDK, and the Leo program.

## Getting Started

### 1. Install Dependencies 

#### Rust:
Install Rust using the following command:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Leo CLI

Build and install the Leo CLI from the source:

```bash
# Clone the Leo repository
git clone https://github.com/ProvableHQ/leo
cd leo

# Install 'leo'
cargo install --path .
```

#### Dokojs CLI 

Install the Dokojs CLI https://github.com/venture23-aleo/doko-js globally using npm:

```bash
npm install -g @doko-js/cli@latest
```

#### Node.js Dependencies

Navigate to the repository root and run:

```bash
npm install
```

### 2. Build the Contracts

Compile the contracts using the Dokojs CLI:

```bash
dokojs compile
```

## Run Tests 
### 1. Set Up the Devnet

Install and run the Aleo lightweight devnet https://github.com/kaxxa123/amareleo-chain

```bash
# Clone the Amareleo Chain repository
git clone https://github.com/kaxxa123/amareleo-chain.git
cd amareleo-chain

# Install the devnet
cargo install --locked --path .

# Start the devnet
amareleo-chain start
```   
### 2. Run tests

Run the tests to deploy the Leo programs and execute elliptic curve operations and Poseidon hashes with different rates both on-chain and using the @noble/curves extension:

```bash
npm test
```
