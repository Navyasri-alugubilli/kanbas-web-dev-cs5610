import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Accounts/reducer";
import assignmentReducer from "./Courses/Assignments/reducer"
import enrollmentReducer from "./reducer"
import quizzesReducer from "./Courses/Quiz/reducer";
import scoresReducer from "./Courses/Quiz/scoresReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollmentReducer,
    quizzesReducer,
    scoresReducer,
  },
});
export default store;