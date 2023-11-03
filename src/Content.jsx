import Row from "./Row";

const departments = [
  {
    id: "wireless",
    name: "AT&T Wireless Support",
    tel: "800.331.500",
  },
  {
    id: "assurion",
    name: "Device Insurance Replacement / Assurion ",
    tel: "888.562.8662",
  },
  {
    id: "firstnet",
    name: "FirstNet Customer CARE",
    tel: "800.574.7000",
  },
  {
    id: "pac",
    name: "Port Activations Center",
    tel: "888.898.7685",
  },
  {
    id: "fraud",
    name: "Wireless Global Fraud",
    tel: "877.844.5584",
  },
  {
    id: "bussinesstech",
    name: "AT&T Business tech support",
    tel: "888.944.0447",
  },
];

const Content = () => {
  return (
    <>
      {departments.map(department => {
        return <Row key={department.id} tel={department.tel} name={department.name} />;
      })}
    </>
  );
};

export default Content;
