import { ProcessStep } from '@/types';

export function getMaxSteps(steps: ProcessStep[]) {
  function _calculateDepth(step: ProcessStep) {
    if (!step.options) {
      return 1;
    }

    let maxDepth = 0;
    for (const option of step.options) {
      const nextStep = steps.find((s) => s.id === option.next);
      if (nextStep) {
        const depth = _calculateDepth(nextStep);
        maxDepth = Math.max(maxDepth, depth);
      }
    }

    return 1 + maxDepth;
  }

  let maxSteps = 0;
  for (const step of steps) {
    const depth = _calculateDepth(step);
    maxSteps = Math.max(maxSteps, depth);
  }

  return maxSteps;
}
