import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const StepsIndicator = ({ steps, currentStep }) => {
  return (
    <nav aria-label="Progress">
      <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            <div className={`flex flex-col py-2 pl-4 md:pl-0 md:pt-4 md:pb-0 md:border-t-4 ${
              step.id < currentStep
                ? 'md:border-blue-600'
                : step.id === currentStep
                ? 'md:border-blue-500'
                : 'md:border-gray-200'
            }`}>
              <span className={`text-xs font-semibold tracking-wide uppercase ${
                step.id < currentStep
                  ? 'text-blue-600'
                  : step.id === currentStep
                  ? 'text-blue-500'
                  : 'text-gray-500'
              }`}>
                {step.id < currentStep ? (
                  <span className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2" />
                    Langkah {step.id}
                  </span>
                ) : (
                  `Langkah ${step.id}`
                )}
              </span>
              <span className={`text-sm font-medium ${
                step.id <= currentStep ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
              <span className="text-sm text-gray-500">{step.description}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepsIndicator;