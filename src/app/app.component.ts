import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import Web3 = require("web3");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  async ngOnInit() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:7545")
    );
    const TicketsContract = new web3.eth.Contract(
      [
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address"
            },
            {
              name: "",
              type: "uint256"
            }
          ],
          name: "owners",
          outputs: [
            {
              name: "festival",
              type: "bytes32"
            },
            {
              name: "owner",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "name",
              type: "bytes32"
            },
            {
              name: "maxTickets",
              type: "uint256"
            },
            {
              name: "price",
              type: "uint256"
            },
            {
              name: "owner",
              type: "address"
            }
          ],
          name: "createFestival",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "bytes32"
            }
          ],
          name: "festivals",
          outputs: [
            {
              name: "name",
              type: "bytes32"
            },
            {
              name: "maxTickets",
              type: "uint256"
            },
            {
              name: "soldTickets",
              type: "uint256"
            },
            {
              name: "price",
              type: "uint256"
            },
            {
              name: "owner",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor"
        }
      ],
      "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f"
    );
    console.log(TicketsContract);
    web3.eth.defaultAccount = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
    console.log(web3.eth.defaultAccount);
    TicketsContract.methods
      .createFestival(
        web3.utils.fromAscii("Test2"),
        5,
        100000000,
        "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
      )
      .send({
        from: web3.eth.defaultAccount
      });
  }
}
