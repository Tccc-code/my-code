import React, { useEffect, useState } from "react";
import MonacoEditor from 'react-monaco-editor';
import { notImplementEffectStr, getLatestStateStr } from './config.js'

import './LittleSkill.scss';


const LittleSkill: React.FC<{}> = () => {
  const [mirrorData, setMirrorData] = useState([])

  useEffect(() => {
    setMirrorData([notImplementEffectStr, getLatestStateStr])
  }, [])

  const options = {
    selectOnLineNumbers: true
  };
  return (
    <div className="little-skill">
      <div className="title">简单小技巧</div>
      <div className="content">
        {
          mirrorData.length > 0 && mirrorData?.map((elm) => {
            return (
              <MonacoEditor
                width="700"
                height="400"
                language="react"
                theme="vs-dark"
                value={elm}
                options={options}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default LittleSkill;