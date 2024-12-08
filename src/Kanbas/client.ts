import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/dashboard`;
export const findEnrollmentsForUser = async (userId: string) => {
    try {
      const response = await axios.get(`${ENROLLMENTS_API}?userId=${userId}`);
      return response.data; // Assumes the API returns the enrollments array.
    } catch (error) {
      console.error("Error fetching enrollments for user:", error);
      throw error; // Rethrow the error for further handling.
    }
  };