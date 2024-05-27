export const notImplementEffectStr = `
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
    };`
export const getLatestStateStr = `
    // 获取state最新值  解决state异步问题
    import { useState, useEffect, useRef } from 'react';
    
    export function useStateWithClosure(initialValue) {
      const [state, setState] = useState(initialValue);
      const stateRef = useRef(state);
    
      useEffect(() => {
        stateRef.current = state;
      }, [state]);
    
      const updateState = (newState) => {
        if (typeof newState === 'function') {
          setState((prevState) => {
            const updatedState = newState(prevState);
            stateRef.current = updatedState;
            return updatedState;
          });
        } else {
          setState(newState);
          stateRef.current = newState;
        }
      };
    
      const getState = () => {
        return stateRef.current;
      }
    
      return [state, updateState, getState];
    }`