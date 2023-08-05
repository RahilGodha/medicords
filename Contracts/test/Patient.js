// SPDX-License-Identifier: MIT
const pat = artifacts.require("Patient");

contract("Patient", (accounts) => {
  it("should add a new patient and create a record", async () => {
    let Patient = await pat.deployed();
    const patientHash = "Joshi";
    await Patient.create_Patient(patientHash, { from : accounts[0] });
    const recordData = "Cold";
    const practitionerId = "Rahil";
    await Patient.addRecord(recordData, practitionerId);
    const records = Patient.records(accounts[0]);
    assert.equal(Patient.records[accounts[0]].patientdata, "Joshi", "Record data mismatch");
    // assert.equal(
    //   records[0].practitioner_id,
    //   practitionerId,
    //   "Practitioner ID mismatch"
    // );
  });
});
