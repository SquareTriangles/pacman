import React, { useEffect, useState } from 'react';

declare global {
  interface Document {
    mozCancelFullScreen: () => Promise<void>;
    webkitExitFullscreen: () => Promise<void>;
    msExitFullscreen: () => Promise<void>;
    fullscreenElement: () => Promise<void>;
    mozFullScreenElement: () => Promise<void>;
    webkitFullscreenElement: () => Promise<void>;
    msFullscreenElement: () => Promise<void>;
    mozFullscreenEnabled: any;
    msFullscreenEnabled: any;
    webkitFullscreenEnabled: any;
  }

  interface HTMLElement {
    webkitRequestFullscreen: () => Promise<void>;
    msRequestFullscreen: () => Promise<void>; 
  }
}

function getBrowserFullscreenElementProp() {
  if (typeof document.fullscreenElement !== 'undefined') {
      return 'fullscreenElement';
  } else if (typeof document['mozFullScreenElement'] !== 'undefined') {
      return 'mozFullScreenElement';
  } else if (typeof document['msFullscreenElement'] !== 'undefined') {
      return 'msFullscreenElement';
  } else if (typeof document['webkitFullscreenElement'] !== 'undefined') {
      return 'webkitFullscreenElement';
  } else {
      return null;
  }
}

function getBrowserFullscreenEnabledProp() {
  if (typeof document.fullscreenEnabled !== 'undefined') {
      return 'fullscreenEnabled';
  } else if (typeof document['mozFullscreenEnabled'] !== 'undefined') {
      return 'mozFullscreenEnabled';
  } else if (typeof document['msFullscreenEnabled'] !== 'undefined') {
      return 'msFullscreenEnabled';
  } else if (typeof document['webkitFullscreenEnabled'] !== 'undefined') {
      return 'webkitFullscreenEnabled';
  } else {
      return null;
  }
}

function isFullScreenEnabled(): boolean {
  const browserFullscreenEnabledProp = getBrowserFullscreenEnabledProp();
  if (!browserFullscreenEnabledProp) {
    return false;
  }
  if (document[browserFullscreenEnabledProp]) {
    return true
  } else {
    console.log('FullScreenMode not supported')
    return false
  }
}

function isFullScreenActive(): boolean {
  const browserFullscreenElementProp = getBrowserFullscreenElementProp();
  if (!browserFullscreenElementProp) {
    return false;
  }
  if (document[browserFullscreenElementProp] !== null) {
    return true
  } 
  return false
}


function activateFullScreenMode(htmlElement: HTMLElement):Promise<void> {
  if (htmlElement.requestFullscreen) {
    return htmlElement.requestFullscreen();
  } else if (htmlElement.webkitRequestFullscreen) {
    return htmlElement.webkitRequestFullscreen();
  } else if (htmlElement.msRequestFullscreen) {
    return htmlElement.msRequestFullscreen();
  }
  return Promise.reject()
}

function disactivateFullScreenMode():Promise<void> {
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    return document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    return document.msExitFullscreen();
  }
  return Promise.reject()
}

type TuseFullscreenStatus = [
  boolean | null,
  () => undefined | void,
];


function useFullscreenStatus(elRef: React.RefObject<HTMLElement>): TuseFullscreenStatus {
    const [isFullscreen, setIsFullscreen] = useState<boolean | null>(false);

    const toggleState = () => {
      if (elRef.current === null) {
        return;
      }
      console.log('toggle state', isFullscreen)
      if (isFullScreenEnabled()) {
        if (isFullScreenActive()) {
          setIsFullscreen(true);
        } else {
          setIsFullscreen(false);
        }
      }
    }

    const _handleChangeError = (err: Error) => {
      console.log(`FullScreen Promise error ${err}`)
    }

    const handleChangeFullScreenMode = (): undefined | void => {
      if (elRef.current === null) {
        return;
      }
      if (isFullScreenEnabled()) {
        if (isFullScreenActive()) {
          console.log('turn off FSM')
          disactivateFullScreenMode()
            .catch(_handleChangeError)
        } else {
          console.log('turn on FSM')
          activateFullScreenMode(elRef.current)
            .catch(_handleChangeError)
        }
      }
    }

    useEffect(() => {
      const _isFullScreenEnabled = isFullScreenEnabled();
      setIsFullscreen(_isFullScreenEnabled ? false : null);
      if (_isFullScreenEnabled) {
        if (elRef.current) {
          elRef.current.addEventListener('fullscreenchange', toggleState)
        }        

        return () => {
          if (elRef.current) {
            elRef.current.removeEventListener('fullscreenchange', toggleState)
          }
        }
      }
    }, []);
    return [isFullscreen, handleChangeFullScreenMode];
}

export default useFullscreenStatus;
