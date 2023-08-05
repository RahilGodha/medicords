// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Patient {
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

    struct patientProfile {
        string patient_data; // It will contain the CID of the Name, DOB and other public details, stored on a distibuted network
    }
    mapping(address => patientProfile) public patient;
    struct Record {
        patientProfile patientdata;
        uint256 time;
        string practitioner_id;
        string patient;
        string record_cred;
    } // This Record will contain 2 things, 1st is the Patient Data, and second is the Record of the Particular Patient
    mapping(address => Record[]) public records;
    struct Practitioners{
        address prac_id;
        bool access;
        uint startAccess;
        uint endAccess;
    }
    mapping(address => Practitioners[]) public practitioners;
    function addRecord(string memory record, string memory prac_id) public {
        Record memory recs;
        recs.patientdata = patient[msg.sender];
        recs.time = block.timestamp;
        recs.record_cred = record;
        recs.practitioner_id = prac_id;
        // This function adds the Records to the "records" array which is mapped to the public key 
        records[msg.sender].push(recs);
    }

    function create_Patient(string memory hash) public {
        patient[msg.sender].patient_data = hash;
    }

    function grantAccess(address prac_id) public{
        Practitioners memory prac;
        prac.prac_id = prac_id;
        prac.access = true;
        prac.startAccess = block.timestamp;
        practitioners[msg.sender].push(prac);
    }
    
}
