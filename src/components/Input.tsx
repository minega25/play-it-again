import React, { useCallback } from 'react';

const textarea: React.CSSProperties = {
  resize: 'none',
  lineHeight: 1.7,
  display: 'inline-block',
  width: '100%',
  borderRadius: 'var(--geist-border-radius)',
  backgroundColor: 'var(--background)',
  padding: 'var(--geist-half-pad)',
  color: 'var(--foreground)',
  fontSize: 14,
};

export const Input: React.FC<{
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  disabled?: boolean;
}> = ({ duration, setDuration, disabled }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setDuration(Number(e.currentTarget.value));
    },
    [setDuration]
  );

  return (
    <input
      disabled={disabled}
      name="duration"
      type="number"
      min={1}
      style={textarea}
      value={duration}
      onChange={onChange}
    />
  );
};
