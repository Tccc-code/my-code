import React, { useEffect, useState } from "react";
import MonacoEditor from 'react-monaco-editor';

import './LittleSkill.scss';


const LittleSkill: React.FC<{}> = () => {
  const [mirrorData, setMirrorData] = useState('')

  useEffect(() => {
    setMirrorData(`
// 首次渲染不执行的effect
import { useEffect, useRef } from 'react';

export default const useDidUpdateEffect = (fn: any, dependent: any) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      fn()
    } else {
      didMountRef.current = true;
    }
  }, dependent);
};`)
  }, [])

  const options = {
    selectOnLineNumbers: true
  };
  return (
    <div className="little-skill">
      <div className="title">简单小技巧</div>
      <MonacoEditor
        width="800"
        height="300"
        language="react"
        theme="vs-dark"
        value={mirrorData}
        options={options}
      />
    </div>
  );
}

export default LittleSkill;