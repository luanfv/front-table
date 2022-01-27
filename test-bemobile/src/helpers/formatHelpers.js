export const formatCellphone = (cellphone) => {
  return `+${cellphone.slice(0, 2)} (${cellphone.slice(
    2,
    4
  )}) ${cellphone.slice(4, 9)}-${cellphone.slice(9, 13)}`;
};

export const formatAdmissionDate = (admissionDate) => {
  const dia = admissionDate.slice(8, 10);
  const mes = admissionDate.slice(5, 7);
  const ano = admissionDate.slice(0, 4);
  return `${dia}/${mes}/${ano}`;
};
