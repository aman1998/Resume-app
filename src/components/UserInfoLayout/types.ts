import { ReactNode } from 'react';

export interface ILayoutProps {
  children: ReactNode;
  title?: string;
  getButton?: () => JSX.Element;
  widthHeaderMargin?: boolean;
}
