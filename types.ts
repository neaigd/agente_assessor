
export enum TaskStage {
  INITIAL = 'initial',
  FILE_PROCESSING = 'file_processing',
  FILE_READY = 'file_ready', // PDF processed, ready to start Task 1
  TASK1_PENDING = 'task1_pending',
  TASK1_COMPLETED = 'task1_completed',
  TASK2_PENDING = 'task2_pending',
  TASK2_COMPLETED = 'task2_completed',
  TASK3_PENDING = 'task3_pending',
  TASK3_COMPLETED = 'task3_completed',
  TASK4_PENDING = 'task4_pending',
  TASK4_COMPLETED = 'task4_completed',
  ERROR = 'error',
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web: GroundingChunkWeb;
  // Add other potential types for grounding chunks if necessary
}

export interface Task3Data {
  analysis: string;
  searchResults?: GroundingChunk[];
}
    