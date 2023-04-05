'use client'

import { useState } from 'react';
import styles from './page.module.css';

type buttonProps = {
  title: string,
}

const Button: React.FC<buttonProps> = ({ title }) => {

  return (
    <button
      className={styles.button}
      onClick={() => { }}
    >
      {title}
    </button>
  )
}

export default Button;