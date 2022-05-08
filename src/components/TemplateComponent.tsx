import { motion } from 'framer-motion';
import React, { HTMLProps, useState } from 'react';

// Style imports

// Page imports

// Component imports

// Context imports

interface TemplateComponentProps extends HTMLProps<HTMLDivElement> {
  testProp: string;
}

const TemplateComponent: React.FC<TemplateComponentProps> = ({
  testProp
}) => {
  const [ testState, setTestState ] = useState<string>('');
  return (
    <motion.div>

    </motion.div>
  );
};

export { TemplateComponent };
