import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignments }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignments.title || 'New Assignment',
                description: assignments.description || 'No description',
                course: assignments.course || 'Course',
                due: assignments.due ? new Date(assignments.due).toISOString() : new Date().toISOString(),
                available: assignments.available ? new Date(assignments.available).toISOString() : new Date().toISOString(),
                points: assignments.points || 0,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            
            console.log('Updated assignments:', state.assignments);
        },
        deleteAssignment: (state, { payload: assignmentsId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentsId);
        },
        updateAssignment: (state, { payload: assignments }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignments._id ? assignments : m
            ) as any;
        },
    }
});
export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;