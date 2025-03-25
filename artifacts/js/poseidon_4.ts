import {
  ContractConfig,
  zkGetMapping,
  LeoAddress,
  LeoRecord,
  js2leo,
  leo2js,
  ExternalRecord,
  ExecutionMode,
  ExecutionContext,
  CreateExecutionContext,
  TransactionResponse
} from "@doko-js/core";
import {
  BaseContract
} from "../../contract/base-contract";
import {
  TransactionModel
} from "@provablehq/sdk";
import * as receipt from "./transitions/poseidon_4";

export class Poseidon_4Contract extends BaseContract {

  constructor(config: Partial < ContractConfig > = {
    mode: ExecutionMode.LeoRun
  }) {
    super({
      ...config,
      appName: 'poseidon_4',
      fee: '0.01',
      contractPath: 'artifacts/leo/poseidon_4',
      isImportedAleo: false
    });
  }
  async main(r0: number, r1: number): Promise < TransactionResponse < TransactionModel & receipt.Poseidon_4MainTransition, [number] >> {
    const r0Leo = js2leo.u32(r0);
    const r1Leo = js2leo.u32(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('main', params);
    result.set_converter_fn([leo2js.u32]);
    return result
  }

  async hash(r0: bigint): Promise < TransactionResponse < TransactionModel & receipt.Poseidon_4HashTransition, [bigint] >> {
    const r0Leo = js2leo.field(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('hash', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async hash_two_elements(r0: bigint, r1: bigint): Promise < TransactionResponse < TransactionModel & receipt.Poseidon_4Hash_two_elementsTransition, [bigint] >> {
    const r0Leo = js2leo.field(r0);
    const r1Leo = js2leo.field(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('hash_two_elements', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }


}