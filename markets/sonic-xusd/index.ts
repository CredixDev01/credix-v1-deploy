// noinspection ES6PreferShortImport
import {
  eContractid,
  eSonicNetwork,
  IAaveConfiguration,
  IReserveParams
} from "../../helpers/types";
import {
  rateStrategyStableOne,
} from "../aave/rateStrategies";
import {StabilitySonicMarket} from "../sonic-sbusd";

export const strategyxUSD: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "9500",
  liquidationThreshold: "9700",
  liquidationBonus: "10200",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2500",
  supplyCap: "1500000",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "8000",
  liquidationThreshold: "8500",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2500",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const SonicxUSDMarket: IAaveConfiguration = {
  ...StabilitySonicMarket,
  MarketId: "Sonic Stability xUSD isolated market",
  ProviderId: 103,
  ReservesConfig: {
    ['xUSD']: strategyxUSD,
    ['USDC.e']: strategyUSDC,
  },
  ReserveAssets: {
    [eSonicNetwork.main]: {
      ['xUSD']: "0x6202B9f02E30E5e1c62Cc01E4305450E5d83b926",
      ['USDC.e']: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
    },
  },
  ChainlinkAggregator: {
    [eSonicNetwork.main]: {
      ['xUSD']: "0x3B7d4A571B00C53A8f4f829F1B3CE78c375aA890",
      ['USDC.e']: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
    },
  },
}
