import { client } from "../providers/client";

const getEmployees = async () => {
  const response = await (await fetch(`${client}/employess`)).json();
  return response;
};

export default getEmployees;
