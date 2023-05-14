import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0NWRkODk4MTFlOTQ5MzQ4N2EyZDFkNCIsInVzZXJOYW1lIjoiUmFqIExha2hlcmEiLCJlbWFpbCI6InJhakB5b3BtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGhmYmdrT1JDQnA3b3VNMm5kT0UuZ09oYjZURXRmSm5pemFOa0JBMlJZVkhuSUhHQjAuRlcuIiwiaXNBZG1pbiI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMTJUMDY6MTE6MzYuNjM3WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMTJUMDY6MTE6MzYuNjM3WiIsIl9fdiI6MH0sImlhdCI6MTY4Mzg3MTkwMCwiZXhwIjoxNjg0MTMxMTAwfQ.SZEEMhUzw5jEZLfJLKB2iT-6MDZ8VjQFJAqVFHA0AYo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
