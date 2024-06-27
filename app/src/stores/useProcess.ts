import { Process } from '@shared/models/Process';
import { create } from 'zustand';

type ProcessFields = { [key: string]: any };

interface ProcessState {
  process: Process | null;
  setProcess: (process: Process) => void;
  fields: ProcessFields;
  setFields: (fields: ProcessFields) => void;
  setFieldValue: (key: string, value: any) => void;
}

const useProcess = create<ProcessState>((set) => ({
  process: null,
  setProcess: (process) => set({ process }),
  fields: {},
  setFields: (fields) => set({ fields }),
  setFieldValue: (key, value) =>
    set((state) => ({ fields: { ...state.fields, [key]: value } })),
}));

export default useProcess;
