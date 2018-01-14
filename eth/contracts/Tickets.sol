pragma solidity ^0.4.18;

contract Tickets {
  struct Ticket {
    bytes32 festival;
    address owner;
  }

  struct Festival {
    bytes32 name;
    uint maxTickets;
    uint soldTickets;
    uint price;
    address owner;
  }

  mapping(bytes32 => Festival) public festivals;
  mapping(address => Ticket[]) public owners;

  function createFestival(bytes32 name, uint maxTickets, uint price, address owner) public {
    festivals[name] = Festival(name, maxTickets, 0, price, owner);
  }

  function Tickets() {
    // constructor
  }
}
