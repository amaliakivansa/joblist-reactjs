import axios from "axios";

const baseUrl = "http://dev3.dansmultipro.co.id/api";

export const getJobList = async () => {
  try {
    const res = await axios.get(`${baseUrl}/recruitment/positions.json`);
    return await res?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getJobPaginate = async (page) => {
  try {
    const res = await axios.get(
      `${baseUrl}/recruitment/positions.json?page=${page}`
    );
    return await res?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getJobSearch = async (description, location, fulltime) => {
  try {
    const res = await axios.get(
      `${baseUrl}/recruitment/positions.json?description=${description}&location=${location}&fulltime=${fulltime}`
    );
    return await res?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getJobDetail = async (ID) => {
  try {
    const res = await axios.get(`${baseUrl}/recruitment/positions/${ID}`);
    return await res?.data;
  } catch (err) {
    console.log(err);
  }
};
