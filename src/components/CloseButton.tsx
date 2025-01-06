import React from 'react';
import { Default } from '../utils';
import { CloseToastFunc, Theme, TypeOptions } from '../types';

export interface CloseButtonProps {
  closeToast: CloseToastFunc;
  type: TypeOptions;
  ariaLabel?: string;
  theme: Theme;
}

export function CloseButton({ closeToast, theme, ariaLabel = 'close' }: CloseButtonProps) {
  return (
    <button
      className={`${Default.CSS_NAMESPACE}__close-button ${Default.CSS_NAMESPACE}__close-button--${theme}`}
      type="button"
      onClick={e => {
        e.stopPropagation();
        closeToast(true);
      }}
      aria-label={ariaLabel}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4L4.00066 13.9993" stroke="#4A5DBC" strokeWidth="2" />
        <path d="M14 14L4.00066 4.00066" stroke="#4A5DBC" strokeWidth="2" />
      </svg>
    </button>
  );
}
