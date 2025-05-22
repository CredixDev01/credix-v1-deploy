# CrediX Lending Markets

## Sonic

### Main market

#### Reserves

* wS 0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38
* scUSD 0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE
* USDC 0x29219dd400f2Bf60E5a23d13Be72B486D4038894
* WETH 0x50c42dEAcD8Fc9773493ED674b675bE577f2634b
* USDT 0x6047828dc181963ba44974801FF68e538dA5eaF9
* wOS 0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1
* stS 0xE5DA20F15420aD15DE0fa650600aFc998bbE3955
* scETH 0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812

#### Contracts

```
PoolAddressesProviderRegistry: 
SupplyLogic: 
BorrowLogic: 
LiquidationLogic: 
EModeLogic: 
BridgeLogic: 
ConfiguratorLogic: 
FlashLoanLogic: 
PoolLogic: 
PoolAddressesProvider: 
PoolDataProvider: 
Pool-Implementation: 
PoolConfigurator-Implementation: 
ReservesSetupHelper: 
ACLManager: 
FallbackOracle: 
AaveOracle: 
Pool-Proxy: 
PoolConfigurator-Proxy: 
EmissionManager: 
IncentivesV2-Implementation: 
IncentivesProxy: 
AToken: 
DelegationAwareAToken: 
StableDebtToken: 
VariableDebtToken: 
WrappedTokenGatewayV3: 
```

## How to

```shell
npm i
npm run compile
cp .env.example .env
vim .env
HARDHAT_NETWORK=sonic npx hardhat deploy
# Verify automatic
npx hardhat --network sonic etherscan-verify --api-url https://api.sonicscan.org/
# Verify contracts with undetectable libs
# setup libraries files
npx hardhat --network sonic verify <FlashLoanLogic_contact-addr> --libraries libraries_for_FlashLoanLogic.js
npx hardhat --network sonic verify <Pool-Implementation_contact-addr> --libraries libraries_for_poolimpl.js "<arg>"
npx hardhat --network sonic verify <PoolConfigurator-Implementation_contact-addr> --libraries libraries_for_PoolConfigurator-implementation.js
# Verify aToken proxy contacts
npx hardhat --network sonic verify <contact-addr> "<PoolConfigurator-Proxy>"
```
