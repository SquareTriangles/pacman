import { useRef } from 'react'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import useFullscreenStatus from '../useFullscreenStatus'

describe('Тестируем переход в полноэкранный режим', () => {
  test('Проверяем корректную работу хука без HTMLElement', () => {
    const {result} = renderHook(() => {
      const ref = useRef(null);
      const [isFullscreen, handleChangeFullScreenMode] = useFullscreenStatus(ref);
      return isFullscreen
    })
    expect(result.current).toBe(null)
  });
}); 

