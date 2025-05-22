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

export const strategyYTscUSD: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "7500",
  liquidationThreshold: "8500",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2500",
  supplyCap: "100000",
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

export const SonicYTscUSDMarket: IAaveConfiguration = {
  ...StabilitySonicMarket,
  MarketId: "Sonic Stability YT-scUSD isolated market",
  ProviderId: 102,
  ReservesConfig: {
    ['YT-scUSD']: strategyYTscUSD,
    ['USDC.e']: strategyUSDC,
    ['scUSD']: strategyUSDC,
  },
  ReserveAssets: {
    [eSonicNetwork.main]: {
      ['YT-scUSD']: "0xd2901D474b351bC6eE7b119f9c920863B0F781b2",
      ['USDC.e']: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
      ['scUSD']: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
    },
  },
  ChainlinkAggregator: {
    [eSonicNetwork.main]: {
      ['YT-scUSD']: "0xF0Ff64e9840a5e4e5676F1357dadCE85C55c9fB7",
      ['USDC.e']: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
      ['scUSD']: "0xACE5e348a341a740004304c2c228Af1A4581920F",
    },
  },
}
