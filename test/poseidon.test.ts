import { ExecutionMode } from "@doko-js/core";
import { Field, Poseidon8, Poseidon4, Poseidon2 } from "@provablehq/sdk";
import { PoseidonContract } from "../artifacts/js/poseidon";
import { FieldMath } from "./BLS12_377FieldMath";

const mode = ExecutionMode.LeoRun;
const contract = new PoseidonContract({ mode });
const timeout = 100000;

function deepCopyFieldArray(array: Field[]): Field[] {
  return array.map(item => item.clone());
}

describe('Test poseidon_8', () => {
  /*test("deploy", async () => {
    const tx = await contract.deploy();
    await tx.wait();
  }, timeout)*/

  test.skip("elliptic curve operation via Leo onchain contract", async () => {
    const FM = new FieldMath();
    const curve = new FieldMath().instantiateCustomEdwards();
    const generator = curve.ExtendedPoint.fromAffine({ x: curve.CURVE.Gx, y: curve.CURVE.Gy });

    let tx = await contract.point_ops(BigInt(1));
    const [leo_1G] = await tx.wait();
    console.log("Testing elliptic curve operation 1*G:");
    console.log("Leo program:", leo_1G); //1540945439182663264862696551825005342995406165131907382295858612069623286213
  
    const noble_1G = generator.multiplyUnsafe(BigInt(1));

    console.log("Noble extension:", noble_1G.x);
    if (leo_1G !== noble_1G.x) {
      console.log("ERROR: Mismatch between Leo and Noble results");
    }
    expect(leo_1G).toBe(noble_1G.x);
    console.log("***************************************************************************************\n");

    console.log("Testing elliptic curve operation 5084*G:");
    tx = await contract.point_ops(BigInt(5084));
    const [leo_5084G] = await tx.wait();
    console.log("Leo program:", leo_5084G); //2776514952527161951776184372378215434972124648893122452383695700727820505952
 
    const noble_5084G = generator.multiplyUnsafe(BigInt(5084));
    console.log("Noble extension:", noble_5084G.x);
    if (leo_5084G !== noble_5084G.x) {
      console.log("ERROR: Mismatch between Leo and Noble results");
    }
    expect(leo_5084G).toBe(noble_5084G.x);
    console.log("***************************************************************************************\n");

  }, timeout)

  test("hash one element via Leo onchain contract", async () => {
    const FM = new FieldMath();

    let tx = await contract.hash2(1n);
    const [leo2_h0] = await tx.wait();

    console.log("Testing Poseidon(0), rate 2");
    console.log("Leo program:", leo2_h0); //4132540594984921536033865262184481519443538138414901649826982187348274943234n
    console.log("New Noble:", FM.poseidon2.hash([1n, 1n]));
    const Poseidon2Hasher = new Poseidon2();
    const Fg = Field.fromString("1field");
    const fieldArray = [Fg, Fg];
    const offChainHash = Poseidon2Hasher.hash(deepCopyFieldArray(fieldArray));
    console.log("Provable SDK:", offChainHash.toString());
    console.log("***************************************************************************************\n");
/*
    console.log("Testing Poseidon(5084)");
    const tx3 = await contract.hash2(BigInt(5084));
    const [leo_h5084] = await tx3.wait();
    const tx4 = await contract.hash4(BigInt(5084));
    const [leo4_h5084] = await tx4.wait();
    const tx5 = await contract.hash8(BigInt(5084));
    let [leo8_h5084] = await tx5.wait();
    console.log("Leo program, rate=2:", leo_h5084); //452295651016792142309222270344379889086504965032248030083276667560084958634n
    console.log("Leo program, rate=4:", leo4_h5084); //4523549028034176074169972053584790035174355241209682280740896298094392735328n
    console.log("Leo program, rate=8:", leo8_h5084); //2909604368229020327865981054412671419552178318905636927124341437588112307402n

    const noble_h5084 = FM.poseidon4.hash([BigInt(5084)]);
    console.log("Noble extension:", noble_h5084);

    if (leo8_h5084 !== noble_h5084) {
      console.log("ERROR: Mismatch between Leo and Noble results");
    }
    console.log("***************************************************************************************\n");
*/

  }, timeout)


  test.skip("hash two element", async () => {
    const tx = await contract.hash_two_elements(BigInt(0), BigInt(0));
    const [leo_h0_0] = await tx.wait();
    console.log("Testing Poseidon8([0,0])");
    console.log("Leo program: ", leo_h0_0);

    //const field = Field.fromString("0field");
    //const Poseidon4Hasher = new Poseidon4();
    //const offChainHash = Poseidon4Hasher.hash(deepCopyFieldArray([field, field]));

    //expect(offChainHash.toString()).toBe(onChainHash);  
  }, timeout)
});
