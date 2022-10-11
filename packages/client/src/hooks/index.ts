import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import useFullscreenStatusHook from './useFullscreenStatus';
import type { RootState, AppDispatch } from '../redux/store';

export const useFullscreenStatus = useFullscreenStatusHook;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
