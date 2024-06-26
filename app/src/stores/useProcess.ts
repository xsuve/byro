import { create } from 'zustand';

type ProcessFields = { [key: string]: any };

interface ProcessState {
  fields: ProcessFields;
  setFields: (fields: ProcessFields) => void;
  setFieldValue: (key: string, value: any) => void;
}

const useProcess = create<ProcessState>((set) => ({
  fields: {},
  setFields: (fields) => set({ fields }),
  setFieldValue: (key, value) =>
    set((state) => ({ fields: { ...state.fields, [key]: value } })),
}));

export default useProcess;
