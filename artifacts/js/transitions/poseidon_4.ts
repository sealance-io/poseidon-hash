import {
  tx
} from "@doko-js/core";


export type Poseidon_4MainTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput], 'poseidon_4', 'main' > , ] >
  export type Poseidon_4HashTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PublicOutput], 'poseidon_4', 'hash' > , ] >
  export type Poseidon_4Hash_two_elementsTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PublicOutput], 'poseidon_4', 'hash_two_elements' > , ] >