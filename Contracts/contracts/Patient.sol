// SPDX-License-Identifier: Undefined
pragma solidity ^0.8.17;

contract PractitionerContract {
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the Owner");
        _;
    }
    modifier onlyPractitioner() {
        _;
    }
    modifier onlyPatient() {
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    struct Patient {
        string patient_data; // It will contain the CID of the Name, DOB and other public details, stored on a distibuted network
    }
    mapping(address => Patient) public patient;
    struct Record {
        Patient patientdata;
        uint256 time;
        address record_cred;
    } // This Record will contain 2 things, 1st is the Patient Data, and second is the Record of the Particular Patient
    mapping(address => Record[]) public records;

    function addRecord(string memory record) public {
        records[msg.sender].push(
            patient[msg.sender].patient_data, block.timestamp, record
        );
    }

    function create_Patient(string memory hash) public {
        patient[msg.sender].patient_data = hash;
    }
}
