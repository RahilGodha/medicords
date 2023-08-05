
const TotalList = () => {
  // Sample data for Patient Records (Replace this with your actual data)
  const patientRecords = [
    {
      date: '2023-08-01',
      doctorId: 'DOC123',
      hospitalId: 'HOSP456',
      docLinks: ['link1', 'link2'], 
    },
    {
      date: '2023-08-02',
      doctorId: 'DOC789',
      hospitalId: 'HOSP012',
      docLinks: ['link3', 'link4'],
    },
    {
      date: '2023-08-03',
      doctorId: 'DOC567',
      hospitalId: 'HOSP890',
      docLinks: ['link5', 'link6'],
    },
    {
      date: '2023-08-04',
      doctorId: 'DOC999',
      hospitalId: 'HOSP111',
      docLinks: ['link7', 'link8'],
    },
    {
      date: '2023-08-05',
      doctorId: 'DOC222',
      hospitalId: 'HOSP333',
      docLinks: ['link9', 'link10'],
    },
    {
      date: '2023-08-06',
      doctorId: 'DOC444',
      hospitalId: 'HOSP555',
      docLinks: ['link11', 'link12'],
    },
    {
      date: '2023-08-07',
      doctorId: 'DOC666',
      hospitalId: 'HOSP777',
      docLinks: ['link13', 'link14'],
    },
    {
      date: '2023-08-08',
      doctorId: 'DOC888',
      hospitalId: 'HOSP999',
      docLinks: ['link15', 'link16'],
    },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4">
      {patientRecords.map((record, index) => (
        <div key={index} className=" flex flex-row justify-around bg-white p-4 rounded-lg shadow-md">
          <div>
            <p className="text-gray-600 mb-2">Date: {record.date}</p>
            <p className="text-gray-600 mb-2">Doctor ID: {record.doctorId}</p>
            <p className="text-gray-600 mb-2">Hospital ID: {record.hospitalId}</p>

          </div>
          <div className="mt-4">
            <p className="text-blue-500 font-semibold">Document Links:</p>
            <ul className="list-disc ml-4">
              {record.docLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalList;
