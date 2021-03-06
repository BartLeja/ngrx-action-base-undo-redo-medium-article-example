import { LandState, initialState } from './state/land.model';
import { LandActions, LandActionTypes } from './land.action';

export function landReducer(state: LandState = initialState, action: LandActions ): LandState{
    switch (action.type){
        case LandActionTypes.GetLandsSuccess: 
            return {
                ...state,
                landsColection : action.payload
            }
        case LandActionTypes.GetLandsFail:
            return {
                ...state,
            }
        case LandActionTypes.UpdateLandNameSuccess:
        let index = state.landsColection.map(land => land.id)
        .indexOf(action.payload.landId);
        let newLand = state.landsColection[index];
        newLand.landName = action.payload.landName;
            return {
                ...state,
                landsColection:  state.landsColection.map(land => land.id === action.payload.landId ? land = newLand : land)
                
            }
        case LandActionTypes.UpdateLandNameFail:
            return {
                ...state,
            }

        case LandActionTypes.AddLandSuccess:
            return {
                ...state,
                landsColection: [...state.landsColection, action.payload]
            }
        
        case LandActionTypes.AddLandFail:
            return {
                ...state,
            }

        case LandActionTypes.RemoveLandSuccess:
            return {
                ...state,
                landsColection: [...state.landsColection.filter(l=> l.id !=action.payload)]
            }
        case LandActionTypes.RemoveLandFail:
            return {
                ...state,
            }
        default:
        return state;
    }
}