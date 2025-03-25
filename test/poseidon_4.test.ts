import { ExecutionMode } from "@doko-js/core";
import { Field, Poseidon4, Poseidon2 } from "@provablehq/sdk";
import { Poseidon_4Contract } from "../artifacts/js/poseidon_4";
const mode = ExecutionMode.LeoRun;
const contract = new Poseidon_4Contract({ mode });
const timeout = 10000000;

function deepCopyFieldArray(array: Field[]): Field[] {
  return array.map(item => item.clone());
}

describe('Test poseidon_4', () => {
  test("deploy", async () => {
    const isDeployed = await contract.isDeployed();
    if(!isDeployed) {
      const tx = await contract.deploy();
      await tx.wait();
    }
  }, timeout)

  test("hash one element", async () => {
    const tx = await contract.hash(BigInt(0));
    const [result] = await tx.wait();
    const onChainHash = result.toString() + "field";

    const field = Field.fromString("0field");
    const Poseidon4Hasher = new Poseidon4();
    const offChainHash = Poseidon4Hasher.hash(field);

    expect(offChainHash.toString()).toBe(onChainHash);
  }, timeout)

  test("hash two element", async () => {
    const tx = await contract.hash_two_elements(BigInt(0), BigInt(0));
    const [result] = await tx.wait();
    const onChainHash = result.toString() + "field";

    const field = Field.fromString("0field");
    const Poseidon4Hasher = new Poseidon4();
    const offChainHash = Poseidon4Hasher.hash(deepCopyFieldArray([field, field]));

    expect(offChainHash.toString()).toBe(onChainHash);  
  }, timeout)
});
