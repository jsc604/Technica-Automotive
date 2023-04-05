'use client'

import { useContext } from 'react';
import styles from './page.module.css';
import { selectedButtonContext } from './providers/SelectedButton';

type buttonProps = {
  title: string,
}

const Button: React.FC<buttonProps> = ({ title }) => {
  const { selected, setSelected } = useContext(selectedButtonContext);

  return (
    <button
      className={`${styles.button} ${selected === title && styles.clicked}`}
      onClick={() => setSelected(title)}
    >
      {title}
    </button>
  )
}

export default Button;