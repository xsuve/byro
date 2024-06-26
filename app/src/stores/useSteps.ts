import { ProcessStep } from '@shared/models/Process';
import { create } from 'zustand';

interface StepsState {
  steps: ProcessStep[];
  setSteps: (steps: ProcessStep[]) => void;
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  currentStep: ProcessStep | undefined;
  setActiveStepSlug: (slug: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const useSteps = create<StepsState>((set) => ({
  steps: [],
  setSteps: (steps) => set({ steps, currentStep: steps[0] }),
  currentStepIndex: 0,
  setCurrentStepIndex: (index) =>
    set((state) => ({
      currentStepIndex: index,
      currentStep: state.steps[index],
    })),
  currentStep: undefined,
  setActiveStepSlug: (slug) =>
    set((state) => {
      const foundStep = state.steps.find((step) => step.slug === slug);
      if (foundStep) {
        return {
          currentStepIndex: state.steps.indexOf(foundStep),
          currentStep: foundStep,
        };
      }

      return {};
    }),
  nextStep: () =>
    set((state) => {
      if (state.currentStepIndex < state.steps.length - 1) {
        return {
          currentStepIndex: state.currentStepIndex + 1,
          currentStep: state.steps[state.currentStepIndex + 1],
        };
      }

      return {};
    }),
  prevStep: () =>
    set((state) => {
      if (state.currentStepIndex > 0) {
        return {
          currentStepIndex: state.currentStepIndex - 1,
          currentStep: state.steps[state.currentStepIndex - 1],
        };
      }

      return {};
    }),
}));

export default useSteps;
