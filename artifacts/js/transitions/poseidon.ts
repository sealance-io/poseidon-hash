import {
  tx
} from "@doko-js/core";


export type PoseidonPoint_opsTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PublicOutput], 'poseidon', 'point_ops' > , ] >
  export type PoseidonHash8Transition = tx.ExecutionReceipt < [tx.Transition < [tx.PublicOutput], 'poseidon', 'hash8' > , ] >
  export type PoseidonHash2Transition = tx.ExecutionReceipt < [tx.Transition < [tx.PublicOutput], 'poseidon', 'hash2' > , ] >
  export type PoseidonHash4Transition = tx.ExecutionReceipt < [tx.Transition < [tx.PublicOutput], 'poseidon', 'hash4' > , ] >
  export type PoseidonHash_two_elementsTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PublicOutput], 'poseidon', 'hash_two_elements' > , ] >