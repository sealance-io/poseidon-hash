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
  Transaction
} from "@provablehq/sdk";
import * as receipt from "./transitions/poseidon";

export class PoseidonContract extends BaseContract {

  constructor(config: Partial < ContractConfig > = {
    mode: ExecutionMode.LeoRun
  }) {
    super({
      ...config,
      appName: 'poseidon',
      fee: '0.01',
      contractPath: 'artifacts/leo/poseidon',
      isImportedAleo: false
    });
  }
  async point_ops(r0: bigint): Promise < TransactionResponse < Transaction & receipt.PoseidonPoint_opsTransition, [bigint] >> {
    const r0Leo = js2leo.scalar(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('point_ops', params);
    result.set_converter_fn([leo2js.group]);
    return result
  }

  async hash2(r0: bigint): Promise < TransactionResponse < Transaction & receipt.PoseidonHash2Transition, [bigint] >> {
    const r0Leo = js2leo.field(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('hash2', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async hash_two_elements(r0: bigint, r1: bigint): Promise < TransactionResponse < Transaction & receipt.PoseidonHash_two_elementsTransition, [bigint] >> {
    const r0Leo = js2leo.field(r0);
    const r1Leo = js2leo.field(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('hash_two_elements', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }


}