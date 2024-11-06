import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
const initialState = {
    enrollments: enrollments,
};

const enrollmentSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
      enrollCourse: (state, { payload: { user, course } }) => {
        const existingEnrollment = state.enrollments.find(
          (enrollment) => enrollment.user === user && enrollment.course === course
        );
        if (!existingEnrollment) {
          const newEnrollment = {
            _id: new Date().getTime().toString(),
            user,
            course
          };
          state.enrollments.push(newEnrollment);
        }
      },
      unenrollCourse: (state, { payload: { user, course } }) => {
        state.enrollments = state.enrollments.filter(
          (enrollment) => !(enrollment.user === user && enrollment.course === course)
        );
      }
    }
  });
  
  export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
  export default enrollmentSlice.reducer;