import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
  loading:false,
  error: '',
  episodes:[],
  selected: null
}

export const fetchEpisodes = createAsyncThunk<{results:any}>("episodes/fetchList", async()=>{
  const resp = await fetch(`URL to fetch`)
  if(!resp.ok){
    throw new Error('Failed to fetch episodes')
  }
  const data = await resp.json();
  return data;
})

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    selectEpisode:(state, action:PayloadAction<number>)=>{
     // the function receives a number as action.payload, which can be used for further calculation
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchEpisodes.pending,(state)=>{
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, action)=>{
      state.loading = false;
      state.error = '';
      state.episodes = action.payload.results;
    });
    builder.addCase(fetchEpisodes.rejected,(state, action)=>{
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
      state.episodes = []
    })
  }
});

export const { selectEpisode } = episodesSlice.actions;
export default episodesSlice.reducer;
