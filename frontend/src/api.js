import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const LESSON_PLAN_ENDPOINT = `${BASE_URL}/api/lessonPlans`;
const ACTIVITY_PLAN_ENDPOINT = `${BASE_URL}/api/activityPlans`;
const HEALTH_RECORD_ENDPOINT = `${BASE_URL}/api/healthRecords`;

export const addLessonPlan = async (lessonPlan) => {
    try {
        const response = await axios.post(`${LESSON_PLAN_ENDPOINT}/add`, lessonPlan);
        return response.data;
    } catch (error) {
        console.error("Failed to add lesson plan:", error);
        throw error;
    }
};

export const getAllLessonPlans = async () => {
    try {
        const response = await axios.get(LESSON_PLAN_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch lesson plans:", error);
        throw error;
    }
};
export const getLessonPlanByMonth = async (month) => {
    try {
        const response = await axios.get(`${LESSON_PLAN_ENDPOINT}/month/${month}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch lesson plan for ${month}:`, error);
        throw error;
    }
};

export const updateLessonPlan = async (month, trackingData) => {
    try {
        const response = await axios.put(`${LESSON_PLAN_ENDPOINT}/update/${month}`, { trackingData });
        return response.data;
    } catch (error) {
        console.error(`Failed to update lesson plan for ${month}:`, error);
        throw error;
    }
};
export const updateLessonPlanTracking = async (month, trackingData) => {
    try {
      const response = await axios.put(`${BASE_URL}/update/${month}`, { trackingData });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  //activity plan

  export const addActivityPlan = async (lessonPlan) => {
    try {
        const response = await axios.post(`${ACTIVITY_PLAN_ENDPOINT}/add`, lessonPlan);
        return response.data;
    } catch (error) {
        console.error("Failed to add activity plan:", error);
        throw error;
    }
};

export const getAllActivityPlans = async () => {
    try {
        const response = await axios.get(ACTIVITY_PLAN_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch activity plans:", error);
        throw error;
    }
};
export const getActivityPlanByMonth = async (month) => {
    try {
        const response = await axios.get(`${ACTIVITY_PLAN_ENDPOINT}/month/${month}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch activity plan for ${month}:`, error);
        throw error;
    }
};

export const updateActivityPlan = async (month, trackingData) => {
    try {
        const response = await axios.put(`${ACTIVITY_PLAN_ENDPOINT}/update/${month}`, { trackingData });
        return response.data;
    } catch (error) {
        console.error(`Failed to update activity plan for ${month}:`, error);
        throw error;
    }
};
export const updateActivityPlanTracking = async (month, trackingData) => {
    try {
      const response = await axios.put(`${BASE_URL}/update/${month}`, { trackingData });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  //healthrecord



export const addHealthRecord = async (data) => {
    try {
        const response = await axios.post(`${HEALTH_RECORD_ENDPOINT}/add`, data);
        return response.data;
    } catch (error) {
        console.error("Failed to add health record:", error);
        throw error;
    }
};

export const searchHealthRecordByRegNumber = async (regNumber) => {
    try {
        const response = await axios.get(`${HEALTH_RECORD_ENDPOINT}/search/${regNumber}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch health record for ${regNumber}:`, error);
        throw error;
    }
};

export const updateHealthRecord = async (regNumber, data) => {
    try {
        const response = await axios.put(`${HEALTH_RECORD_ENDPOINT}/update/${regNumber}`, data);
        return response.data;
    } catch (error) {
        console.error(`Failed to update health record for ${regNumber}:`, error);
        throw error;
    }
};
