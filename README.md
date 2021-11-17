# New Token Agent

## Description
Определяет события создания нового токена 
В metadata события
symbol - символ
address - адрес контракта

## Supported Chains

- Ethereum
- List any other chains this agent can support e.g. BSC

## Alerts

Describe each of the type of alerts fired by this agent

- FORTA-101
  - Fired when a new contract created. 
  - Severity is always set to "info" 
  - Descript token address and symbol

## Test data

Jest test uses transaction 0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199 for get token MPAD (it`s scam token :-))