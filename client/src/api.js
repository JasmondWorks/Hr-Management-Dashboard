export const fetchLoggedInAdmin = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_DB_BASE_URL}/admins/${
      import.meta.env.VITE_LOGGED_IN_ADMIN_ID
    }`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const fetchEmployees = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_DB_BASE_URL}/employees}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const fetchEmployee = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_DB_BASE_URL}/employee/${id}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
