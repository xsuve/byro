import { ProcessStep } from '@/types';

export function getMaxSteps(steps: ProcessStep[], currentStep = 1) {
  let maxSteps = currentStep;

  steps.forEach((step) => {
    step.options?.forEach((option) => {
      const nextStep = steps.find((s) => s.id === option.next);
      if (nextStep) {
        maxSteps = Math.max(maxSteps, getMaxSteps([nextStep], currentStep + 1));
      }
    });
  });

  return maxSteps;
}
